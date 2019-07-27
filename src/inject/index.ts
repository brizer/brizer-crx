import { TAB_NAME, MESSAGE_GOTO, UI_NAME, MESSAGE_COPY_LINK } from "../const";
import { gotoLinks, copyLinks } from "./link";

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
    }
}


// const port = chrome.runtime.connect({name: UI_NAME})
chrome.runtime.onMessage.addListener(onMessage)
