import UserStorage from "./userStorage";
import Messenger from "./messenger";
import { MessageAdapter, UserSettings, ExtensionData, UrlItem, GenerateUrlMsg, ContextAdapter } from "definitions";
import { MESSAGE_GOTO, MESSAGE_COPY_LINK, MESSAGE_GENERATE, MESSAGE_ADDCSS, MESSAGE_OPEN_EDIT } from '../const';
import TabManager from "./tabManager";
import ContextManager from "./contextManager";

export class Extension {
    private ready: boolean;
    private user: UserStorage;
    private messenger: Messenger;
    private tab: TabManager;
    private context: ContextManager;
    constructor() {
        this.ready = false;
        this.user = new UserStorage();
        this.messenger = new Messenger(this.getMessengerAdapter());
        this.tab = new TabManager();
        this.context = new ContextManager(this.getContextAdapter());
    }

    async start() {
        this.ready = true;
    }

    private getMessengerAdapter(): MessageAdapter {
        return {
            collect: () => this.collectData(),
            changeSettings: (settings) => this.changeSettings(settings),
            gotoLink: (data) => this.gotoLink(data),
            copyLink: (data) => this.copyLink(data),
            generateLink: (data) => this.generateLink(data),
            addCss:(data)=>this.addCss(data),
            openEdit:()=>this.openEdit()
        }
    }

    private getContextAdapter(): ContextAdapter {
        return {
            open: (data) => this.gotoLink(data)
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

    private copyLink(data: UrlItem) {
        this.tab.sendMessageToContent({ type: MESSAGE_COPY_LINK, data: data })
    }

    private generateLink(data:GenerateUrlMsg){
        this.tab.sendMessageToContent({ type: MESSAGE_GENERATE, data: data })
    }

    private addCss(data:string){
        this.tab.sendMessageToContent({type:MESSAGE_ADDCSS,data})
    }
    
    private openEdit(){
        this.tab.sendMessageToContent({type:MESSAGE_OPEN_EDIT})
    }
}