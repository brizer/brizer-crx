import { UserSettings, Message, MessageAdapter } from '../definitions'
import { MESSAGE_CHANGE_SETTINGS, UI_NAME } from '../const';


export default class Messenger {
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
            
            case MESSAGE_CHANGE_SETTINGS: {
                this.adapter.changeSettings(data);
                break;
            }
        }
    }
}