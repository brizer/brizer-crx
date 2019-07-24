import { UI_NAME, MESSAGE_CHANGE_SETTINGS } from "../../const";
import { UserSettings } from "definitions";

export default class Connector {
    private port: chrome.runtime.Port;
    constructor(){
        chrome.runtime.connect({name:UI_NAME})
    }

    public changeSettings(settings: Partial<UserSettings>) {
        this.port.postMessage({type: MESSAGE_CHANGE_SETTINGS, data: settings});
    }

    public disconnect() {
        this.port.disconnect();
    }
}