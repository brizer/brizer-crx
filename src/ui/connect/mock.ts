import { UserSettings } from "definitions";
import { gotoLinks, copyLinks, generateUrl } from "../../inject/link";
import { addCss } from "../../inject/style";

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
                    str: "localhost:8080",
                    toStr: "www.google.com"
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
        gotoLink(data){
            gotoLinks(data)
        },
        copyLink(data){
            copyLinks(data)
        },
        generateUrl(data){
            generateUrl(data)
        },
        addCss(data){
            addCss(data)
        },
        disconnect(){

        }
    }
    return connector;

}