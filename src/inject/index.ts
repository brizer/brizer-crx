import { MESSAGE_GOTO, UI_NAME, MESSAGE_COPY_LINK, MESSAGE_GENERATE, MESSAGE_ADDCSS, MESSAGE_OPEN_EDIT } from '../const';
import { gotoLinks, copyLinks, generateUrl } from "./link";
import { initBrizerHubUI } from "./ui";
import { addCss,openEdit } from './style';

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
        case MESSAGE_ADDCSS: {
            addCss(data)
            break;
        }
        case MESSAGE_OPEN_EDIT: {
            openEdit()
            break;
        }
    }
}


// const port = chrome.runtime.connect({name: UI_NAME})
chrome.runtime.onMessage.addListener(onMessage)

if(window.location.href.includes('https://github.com/FunnyLiu?') || window.location.href === 'https://github.com/FunnyLiu'){
    setTimeout(initBrizerHubUI,1000)
}
