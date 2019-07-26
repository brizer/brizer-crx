import { UserSettings, Message, MessageAdapter, ExtensionData } from '../definitions'
import { MESSAGE_CHANGE_SETTINGS, UI_NAME, MESSAGE_GET_DATA, MESSAGE_GOTO } from '../const';


export default class Messenger {
    private reporters: Set<(info: ExtensionData) => void>;

    private adapter:MessageAdapter;
    constructor(adapter:MessageAdapter){
        
        this.adapter = adapter;
        chrome.runtime.onConnect.addListener((port) => {
            if (port.name === UI_NAME) {
                port.onMessage.addListener((message) => this.onUIMessage(port, message));
            }
        });
    }

    private async onUIMessage(port: chrome.runtime.Port, {type, id, data}: Message) {
        switch (type) {
            case MESSAGE_GET_DATA:{
                const data = await this.adapter.collect();
                port.postMessage({id,data})
                break;
            }
            case MESSAGE_CHANGE_SETTINGS: {
                this.adapter.changeSettings(data);
                break;
            }
            case MESSAGE_GOTO: {
                this.adapter.gotoLink(data)
                break;
            }
        }
    }
}