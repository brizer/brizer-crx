import { UserSettings } from "definitions";

export default class UserStorage {
    private defaultSettings: UserSettings;
    private settings: Readonly<UserSettings>;

    constructor() {
        this.defaultSettings = {
            urls: []
        }
        this.settings = null;
    }


    async loadSettings() {
        this.settings = await this.loadSettingsFromStorage();
    }
    /**
     * get settings from chrome storage
     */
    private loadSettingsFromStorage() {
        return new Promise<UserSettings>((resolve) => {
            chrome.storage.local.get(this.defaultSettings, (local: UserSettings) => {
                resolve(local)
            });
        });
    }

    async saveSettings() {
        const saved = await this.saveSettingsIntoStorage(this.settings);
        this.settings = saved;
    }
    /**
     * set settings into chrome storage
     * @param settings 
     */
    private saveSettingsIntoStorage(settings: UserSettings) {
        return new Promise<UserSettings>((resolve) => {
            chrome.storage.local.set(settings, () => resolve(settings));
        });
    }
}