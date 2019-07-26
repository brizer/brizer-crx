export function gotoLinks (links) {
    const { str, toStr} = links;
    if(window.location.href.indexOf(str)===-1){return}
    const newLink = window.location.href.replace(str,toStr)
    window.open(newLink)
}