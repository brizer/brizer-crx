import UserStorage from "./userStorage";
import Messenger from "./messenger";
import { MessageAdapter, UserSettings, ExtensionData } from "definitions";

export class Extension{
    private ready:boolean;
    private user: UserStorage;
    private messenger: Messenger;
    constructor () {
        this.ready = false;
        this.user = new UserStorage();
        this.messenger = new Messenger(this.getMessengerAdapter());
    }

    async start () {
        this.ready = true;
    }

    private getMessengerAdapter() :MessageAdapter{
        return {
            collect:()=> this.collectData(),
            changeSettings:(settings)=> this.changeSettings(settings)
        }
    }

    private async collectData():Promise<ExtensionData>{
        return {
            settings: this.user.settings
        }
    }
    private changeSettings(settings:Partial<UserSettings>){
        this.user.set(settings);
        this.saveUserSettings()
    }
    private async saveUserSettings(){
        this.user.saveSettings()
    } 
}