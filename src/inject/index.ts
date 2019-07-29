import { MESSAGE_GOTO, UI_NAME, MESSAGE_COPY_LINK, MESSAGE_GENERATE } from "../const";
import { gotoLinks, copyLinks, generateUrl } from "./link";

function onMessage({ type, data }) {
    switch (type) {
        case MESSAGE_GOTO: {
            const links = data;
            gotoLinks(links)
            break;
        }
        case MESSAGE_COPY_LINK: {
            const links = data;
            copyLinks(links)
            break;
        }
        case MESSAGE_GENERATE: {
            generateUrl(data)
            break;
        }
    }
}


// const port = chrome.runtime.connect({name: UI_NAME})
chrome.runtime.onMessage.addListener(onMessage)
