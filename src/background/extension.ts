import UserStorage from "./userStorage";
import Messenger from "./messenger";
import { MessageAdapter, UserSettings } from "definitions";

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
        console.warn(12345)
    }

    private getMessengerAdapter() :MessageAdapter{
        return {
            changeSettings:(settings)=> this.changeSettings(settings)
        }
    }

    private changeSettings(settings:Partial<UserSettings>){
        this.user.set(settings);
    }
}