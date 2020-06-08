
export interface ExtensionData {
    settings: UserSettings;
}

export interface ExtensionActions {
    changeSettings(settings: Partial<UserSettings>);
    gotoLink(record:UrlItem);
    copyLink(record:UrlItem);
    generateUrl(record: GenerateUrlMsg);
    addCss(record: string);
    openEdit();
}

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

export interface GenerateUrlMsg {
    type: string;
}

export interface Message {
    type: string;
    data?: any;
    id?: any;
    error?: any;
}

export interface MessageAdapter {
    collect: ()=>Promise<ExtensionData>
    changeSettings: (settings: Partial<UserSettings>) => void;
    gotoLink: (data:UrlItem)=> void;
    copyLink: (data:UrlItem)=> void;
    generateLink: (data:GenerateUrlMsg)=> void;
    addCss: (data:string)=> void;
    openEdit: ()=>void;
}

export interface ContextAdapter {
    open: (data:UrlItem)=> void;
}

export interface IInfoConfig {
    enable: boolean;
    fetch: string;
    fetchObj?: RequestInit;
    title: string;
    cb: (data: any) => Promise<InfoList>;
  }
  
  export interface IInfoListItem {
    name?: string;
    link?: string;
    title?: string;
    html?: string;
  }

  export interface ICustomInfoListItem {
    html:string
  }
  
  export type InfoList = IInfoListItem[];
  
  export type InfoConfigList = IInfoConfig[];