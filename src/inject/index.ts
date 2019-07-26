import { TAB_NAME, MESSAGE_GOTO, UI_NAME } from "../const";
import { gotoLinks } from "./link";

function onMessage({ type, data }) {
    switch (type) {
        case MESSAGE_GOTO: {
            const links = data;
            gotoLinks(links)
        }
    }
}


// const port = chrome.runtime.connect({name: UI_NAME})
chrome.runtime.onMessage.addListener(onMessage)
