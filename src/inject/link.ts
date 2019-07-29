import { UrlItem, GenerateUrlMsg } from "definitions";
import { GENERATE_TYPE_AWESOME } from "../const";

export function gotoLinks(links:UrlItem) {
    const { str, toStr } = links;
    if (window.location.href.indexOf(str) === -1) { return }
    const newLink = window.location.href.replace(str, toStr)
    window.open(newLink)


}

export function copyLinks(links:UrlItem){
    const { str, toStr } = links;
    if (window.location.href.indexOf(str) === -1) { return }
    const newLink = window.location.href.replace(str, toStr)
    copyToClipboard(newLink)
}

export function generateUrl(data:GenerateUrlMsg){
    const { type } = data;
    switch (type) {
        case GENERATE_TYPE_AWESOME:
            generateAwesomeUrl()
            break;
    
        default:
            break;
    }
}

async function copyToClipboard(text: string) {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.value = text;
    input.focus();
    input.select();
    const result = document.execCommand('copy')
    document.body.removeChild(input)
}


function generateAwesomeUrl() {
    const url = window.location.href;
    const rgx = /https?:\/\/github\.com\/.*\/(.*)/;
    const result = url.match(rgx)
    let txt = '';
    if(result && result.length>1){
        txt = `- [${result[1]}](${url}) - `
    }
    const desNode = document.querySelector('.text-gray-dark.mr-2');
    if(desNode && desNode.innerHTML){
        txt += desNode.innerHTML.trim()
    }
    copyToClipboard(txt)
}
