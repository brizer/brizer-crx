declare module '*.less'
declare module '*.css'


export interface UrlItem {
    key:number;
    /**
     * 被替换的字符串
     */
    str:string;
    /**
     * 替换成的字符串
     */
    toStr:string;
}

export interface UserSettings {
    urls:UrlItem[]
}

export interface Message {
    type: string;
    data?: any;
    id?: any;
    error?: any;
}

export interface MessageAdapter {
    changeSettings: (settings: Partial<UserSettings>) => void;

}
