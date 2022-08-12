import { UrlItem, GenerateUrlMsg } from "definitions";
import { GENERATE_TYPE_AWESOME, GENERATE_TYPE_REFERENCE, GENERATE_TYPE_REFERENCE_RELATIVE, GENERATE_TYPE_RUNAPI } from "../const";

export function gotoLinks(links: UrlItem) {
    const { str, toStr } = links;
    if (window.location.href.indexOf(str) === -1) { return }
    const newLink = window.location.href.replace(str, toStr)
    window.open(newLink)


}

export function copyLinks(links: UrlItem) {
    const { str, toStr } = links;
    if (window.location.href.indexOf(str) === -1) { return }
    const newLink = window.location.href.replace(str, toStr)
    copyToClipboard(newLink)
}

export function generateUrl(data: GenerateUrlMsg) {
    const { type } = data;
    switch (type) {
        case GENERATE_TYPE_AWESOME:
            generateAwesomeUrl()
            break;
        case GENERATE_TYPE_REFERENCE:
            generateReferenceUrl()
            break;
        case GENERATE_TYPE_REFERENCE_RELATIVE:
            generateRelativeReferenceUrl()
            break;
        case GENERATE_TYPE_RUNAPI:
            generateRunApi()
        default:
            break;
    }
}

async function copyToClipboard(text: string) {
    const input = document.createElement('textarea');
    document.body.appendChild(input);
    input.value = text;
    input.select();
    const result = document.execCommand('copy')
    document.body.removeChild(input)
}


function generateAwesomeUrl() {
    const url = window.location.href;
    const rgx = /https?:\/\/github\.com\/(.*)\/(.*)/;
    const result = url.match(rgx)
    let txt = '';
    if (result && result.length > 1) {
        txt = `- [${result[2]}](${url}) - `
    }
    const desNode = document.querySelector('.f4.mt-3');
    if (desNode && desNode.innerHTML) {
        txt += desNode.innerHTML.trim()
    }
    txt = `${txt} ![img](https://img.shields.io/github/stars/${result[1]}/${result[2]})`
    copyToClipboard(txt)
}

function generateReferenceUrl() {
    const url = window.location.href;
    let txt = '';
    txt = `[${document.title}](${url})`;
    copyToClipboard(txt)
}

function generateRelativeReferenceUrl(){
    let txt = '';
    const { hash, pathname } = window.location
    const title = decodeURI(hash.slice(1))
    txt = `[${title}](${pathname}${hash})`
    copyToClipboard(txt)
}
function generateRunApi(){
    let txt = '';
    const title = (document.querySelector('#doc-title') as any).innerText
    const name = document.querySelectorAll('p')[0].innerText
    const method = (document.querySelector('a[name="请求方式"').parentElement.nextElementSibling.lastChild as any).innerText
    const url = (document.querySelector('a[name="请求URL"').parentElement.nextElementSibling.lastChild as any).innerText.replace(/{{.*}}/,'')
    let body = 'data'
    if(method === 'get') body = 'params'
    txt = `
// ${title}
const ${name} = (${body}) => {
  return request({
    mockName: '/${name}',
    url: '${url}',
    method: '${method}',
    ${body}
  })
}`
    console.log(txt)
    copyToClipboard(txt)

}
