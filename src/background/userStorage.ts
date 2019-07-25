import { UserSettings } from "definitions";

export default class UserStorage {
    private defaultSettings: UserSettings;
    public settings: Readonly<UserSettings>;

    constructor() {
        this.defaultSettings = {
            urls: []
        }
        this.settings = Object.assign({},this.defaultSettings);
        this.loadSettings();
        console.log(this.settings);
    }


    public async loadSettings() {
        this.settings = await this.loadSettingsFromStorage();
    }
    /**
     * get settings from chrome storage
     */
    private loadSettingsFromStorage() {
        return new Promise<UserSettings>((resolve) => {
            chrome.storage.sync.get(this.defaultSettings, (local: UserSettings) => {
                console.log(local)
                resolve(local)
            });
        });
    }

    public async saveSettings() {
        const saved = await this.saveSettingsIntoStorage(this.settings);
        this.settings = saved;
    }
    /**
     * set settings into chrome storage
     * @param settings 
     */
    private saveSettingsIntoStorage(settings: UserSettings) {
        return new Promise<UserSettings>((resolve) => {
            console.log(settings)
            chrome.storage.sync.set(settings, () => resolve(settings));
        });
    }
    /**
     * set this.settings
     * @param settings 
     */
    public set(settings: Partial<UserSettings>) {
        this.settings = {...this.settings, ...settings};
    }
}