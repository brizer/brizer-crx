export default class TabManager {
    constructor() {

    }

    public getTabs(query: chrome.tabs.QueryInfo) {
        return new Promise<chrome.tabs.Tab[]>((resolve) => {
            chrome.tabs.query(query, (tabs) => resolve(tabs))
        })
    }

    public async getCurrentTab(): Promise<chrome.tabs.Tab> {
        const tabs = await this.getTabs({ active: true, currentWindow: true })
        return tabs[0];
    }

    public async getCurrentTabId() {
        const { id } = await this.getCurrentTab()
        return id;
    }

    public async sendMessageToContent(message){
        const tabId = await this.getCurrentTabId()
        chrome.tabs.sendMessage(tabId,message)
    }

}