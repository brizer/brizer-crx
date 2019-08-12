import { ContextAdapter } from "definitions";
import { CONTEXT_MEUNITEM_ID_OPEN, CONTEXT_MEUNITEM_ID_TRANSLATE } from "../const";

export default class ContextManager {
    private adapter: ContextAdapter;

    constructor(adapter: ContextAdapter) {
        this.adapter = adapter;
        this.createContext()
        this.listenClick()
    }

    private createContext(): void {
        chrome.contextMenus.create({
            id: CONTEXT_MEUNITEM_ID_OPEN,
            title: '新开相同页',
            contexts: ["all"]
        });
        chrome.contextMenus.create({
            id: CONTEXT_MEUNITEM_ID_TRANSLATE,
            title: '新开翻译页',
            contexts: ["all"]
        });
    }

    private listenClick(): void {
        chrome.contextMenus.onClicked.addListener((info, tab) => {
            switch (info.menuItemId) {
                case CONTEXT_MEUNITEM_ID_OPEN: {
                    this.adapter.open({
                        key: +new Date(),
                        str: '',
                        toStr: ''
                    })
                    break;
                }
                case CONTEXT_MEUNITEM_ID_TRANSLATE: {
                    this.adapter.open({
                        key: +new Date(),
                        str: 'http',
                        toStr: 'https://translate.google.com.hk/translate?sl=en&tl=zh-CN&u=http'
                    })
                    break;
                }
                default: {
                    break;
                }
            }
        });
    }
}
