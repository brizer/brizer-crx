import { UrlItem } from "definitions";

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

async function copyToClipboard(text: string) {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.value = text;
    input.focus();
    input.select();
    const result = document.execCommand('copy')
    document.body.removeChild(input)
}