import UserStorage from "./userStorage";
import Messenger from "./messenger";
import { MessageAdapter, UserSettings, ExtensionData, UrlItem } from "definitions";
import { MESSAGE_GOTO } from "../const";
import TabManager from "./tabManager";

export class Extension {
    private ready: boolean;
    private user: UserStorage;
    private messenger: Messenger;
    private tab: TabManager;
    constructor() {
        this.ready = false;
        this.user = new UserStorage();
        this.messenger = new Messenger(this.getMessengerAdapter());
        this.tab = new TabManager()
    }

    async start() {
        this.ready = true;
    }

    private getMessengerAdapter(): MessageAdapter {
        return {
            collect: () => this.collectData(),
            changeSettings: (settings) => this.changeSettings(settings),
            gotoLink: (data) => this.gotoLink(data)
        }
    }

    private async collectData(): Promise<ExtensionData> {
        return {
            settings: this.user.settings
        }
    }
    
    private changeSettings(settings: Partial<UserSettings>) {
        this.user.set(settings);
        this.saveUserSettings()
    }

    private async saveUserSettings() {
        this.user.saveSettings()
    }

    private gotoLink(data: UrlItem) {
        this.tab.sendMessageToContent({ type: MESSAGE_GOTO, data: data })
    }
}