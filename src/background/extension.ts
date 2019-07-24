import UserStorage from "./userStorage";

export class Extension{
    ready:boolean;
    user: UserStorage;
    constructor () {
        this.ready = false;
        this.user = new UserStorage();
    }

    async start () {
        this.ready = true;
        console.warn(12345)
    }
}