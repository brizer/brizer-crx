import { UserSettings } from "definitions";

function getMockData(override = {}) {
    return Object.assign({
        settings: {
            urls: [
                {
                    key: 11,
                    str: "localhost:8089",
                    toStr: "http://www.baidu.com"
                },
                {
                    key: 112,
                    str: "localhost:8081",
                    toStr: "http://www.google.com"
                }
            ]
        } as UserSettings
    }, override)
}

export function createConnectorMock() {
    const data = getMockData();
    const connector = {
        getData(){
            return Promise.resolve(data)
        },
        changeSettings(settings:Partial<UserSettings>){
            Object.assign(data.settings,settings)
        },
        disconnect(){

        }
    }
    return connector;

}