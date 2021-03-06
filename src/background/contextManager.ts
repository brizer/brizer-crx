import { ContextAdapter } from "definitions";
import { CONTEXT_MEUNITEM_ID_OPEN, CONTEXT_MEUNITEM_ID_TRANSLATE, CONTEXT_MEUNITEM_ID_SEARCH_ZHIHU, CONTEXT_MEUNITEM_ID_SEARCH_JUEJIN, CONTEXT_MEUNITEM_ID_SEARCH_WIKI, CONTEXT_MEUNITEM_ID_SEARCH_GIT, CONTEXT_MEUNITEM_ID_SEARCH_NPM, CONTEXT_MEUNITEM_ID_SEARCH_MDN, CONTEXT_MEUNITEM_ID_READ_SOURCE, CONTEXT_MEUNITEM_ID_SEARCH_NPM_TREND, CONTEXT_MEUNITEM_ID_SEARCH_GIT_PRO } from '../const';

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
        chrome.contextMenus.create({
            id:CONTEXT_MEUNITEM_ID_SEARCH_ZHIHU,
            title:'知乎搜索',
            contexts: ['selection']
        });
        chrome.contextMenus.create({
            id:CONTEXT_MEUNITEM_ID_SEARCH_JUEJIN,
            title:'掘金搜索',
            contexts: ['selection']
        });
        chrome.contextMenus.create({
            id:CONTEXT_MEUNITEM_ID_SEARCH_WIKI,
            title:'维基搜索',
            contexts: ['selection']
        });
        chrome.contextMenus.create({
            id:CONTEXT_MEUNITEM_ID_SEARCH_GIT,
            title:'github搜索',
            contexts: ['selection']
        });
        chrome.contextMenus.create({
            id:CONTEXT_MEUNITEM_ID_SEARCH_NPM,
            title:'npm搜索',
            contexts: ['selection']
        });
        chrome.contextMenus.create({
            id:CONTEXT_MEUNITEM_ID_SEARCH_NPM_TREND,
            title:'npm下载对比',
            contexts: ['selection']
        });
        chrome.contextMenus.create({
            id:CONTEXT_MEUNITEM_ID_SEARCH_MDN,
            title:'mdn搜索',
            contexts: ['selection']
        });
        chrome.contextMenus.create({
            id:CONTEXT_MEUNITEM_ID_READ_SOURCE,
            title:'源码分析',
            contexts: ['selection']
        });
        chrome.contextMenus.create({
            id:CONTEXT_MEUNITEM_ID_SEARCH_GIT_PRO,
            title:'github搜索最大化',
            contexts: ['selection']
        })
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
                case CONTEXT_MEUNITEM_ID_SEARCH_ZHIHU: {
                    this.adapter.open({
                        key: +new Date(),
                        str: info.pageUrl,
                        toStr: `https://www.zhihu.com/search?type=content&q=${info.selectionText}`
                    })
                    break;
                }
                case CONTEXT_MEUNITEM_ID_SEARCH_JUEJIN: {
                    this.adapter.open({
                        key: +new Date(),
                        str: info.pageUrl,
                        toStr: `https://juejin.im/search?query=${info.selectionText}&type=all`
                    })
                    break;
                }
                case CONTEXT_MEUNITEM_ID_SEARCH_WIKI: {
                    this.adapter.open({
                        key: +new Date(),
                        str: info.pageUrl,
                        toStr: `https://zh.wikipedia.org/w/index.php?search=${info.selectionText}&title=Special:%E6%90%9C%E7%B4%A2&go=%E5%89%8D%E5%BE%80&ns0=1`
                    })
                    break;
                }
                case CONTEXT_MEUNITEM_ID_SEARCH_GIT: {
                    this.adapter.open({
                        key: +new Date(),
                        str: info.pageUrl,
                        toStr: `https://github.com/search?q=${info.selectionText}`
                    })
                    break;
                }
                case CONTEXT_MEUNITEM_ID_SEARCH_NPM: {
                    this.adapter.open({
                        key: +new Date(),
                        str: info.pageUrl,
                        toStr: `https://www.npmjs.com/search?q=${info.selectionText}`
                    })
                    break;
                }
                case CONTEXT_MEUNITEM_ID_SEARCH_NPM_TREND: {
                    this.adapter.open({
                        key: +new Date(),
                        str: info.pageUrl,
                        toStr: `https://www.npmtrends.com/${info.selectionText}`
                    })
                    break;
                }
                case CONTEXT_MEUNITEM_ID_SEARCH_MDN: {
                    this.adapter.open({
                        key: +new Date(),
                        str: info.pageUrl,
                        toStr: `https://developer.mozilla.org/zh-CN/search?q=${info.selectionText}`
                    })
                    break;
                }
                case CONTEXT_MEUNITEM_ID_READ_SOURCE: {
                    this.adapter.open({
                        key: +new Date(),
                        str: info.pageUrl,
                        toStr: `https://github.com/FunnyLiu/${info.selectionText}/tree/readsource`
                    })
                    break;
                }
                case CONTEXT_MEUNITEM_ID_SEARCH_GIT_PRO: {
                    this.adapter.open({
                        key: +new Date(),
                        str: info.pageUrl,
                        toStr: `https://github.com/search?q=in%3Areadme+${info.selectionText}&type=Repositories`
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
