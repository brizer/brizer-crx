import { UI_NAME, MESSAGE_CHANGE_SETTINGS, MESSAGE_GET_DATA, MESSAGE_GOTO, MESSAGE_COPY_LINK, MESSAGE_GENERATE } from "../../const";
import { UserSettings, ExtensionData, Message, UrlItem, GenerateUrlMsg } from "definitions";

export default class Connector {
    private port: chrome.runtime.Port;
    private counter: number;
    constructor() {
        this.counter = 0;

        this.port = chrome.runtime.connect({ name: UI_NAME })
    }

    private getRequestId() {
        return ++this.counter;
    }

    private sendRequest<T>(request: Message, executor: (response: Message, resolve: (data?: T) => void, reject: (error: Error) => void) => void) {
        const id = this.getRequestId();
        return new Promise<T>((resolve, reject) => {
            const listener = ({ id: responseId, ...response }: Message) => {
                if (responseId === id) {
                    executor(response, resolve, reject);
                    this.port.onMessage.removeListener(listener);
                }
            };
            this.port.onMessage.addListener(listener);
            this.port.postMessage({ ...request, id });
        });
    }

    public getData() {
        return this.sendRequest<ExtensionData>({ type: MESSAGE_GET_DATA }, ({ data }, resolve) => resolve(data));
    }

    public changeSettings(settings: Partial<UserSettings>) {
        this.port.postMessage({ type: MESSAGE_CHANGE_SETTINGS, data: settings });
    }
    public gotoLink(data:UrlItem){
        this.port.postMessage({type:MESSAGE_GOTO,data:data})
    }

    public copyLink(data:UrlItem){
        this.port.postMessage({type:MESSAGE_COPY_LINK,data:data})
    }

    public generateUrl(data:GenerateUrlMsg){
        this.port.postMessage({type:MESSAGE_GENERATE,data:data})
    }

    public disconnect() {
        this.port.disconnect();
    }
}