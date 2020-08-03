export function initBrizerHubUI() {
    const queryDom = document.querySelector('#your-repos-filter');
    queryDom.addEventListener('blur',realInitBrizerHubUI.bind(this),false);
}

function realInitBrizerHubUI() {
    let listUIDom = document.querySelector(".org-repos.repo-list");
    let liList = listUIDom.querySelectorAll(".public.fork.d-block.py-4.border-bottom");
    liList.forEach(v => {
      if (v.outerHTML.includes(`Forked from`) && !v.outerHTML.includes('brizer-li')) {
        let nameDom = v.querySelector(".d-inline-block");
        let name = nameDom.innerHTML.trim();
        let sourceNode = document.createElement("a");
        sourceNode.href = `https://github.com/FunnyLiu/${name}/tree/readsource`;
        sourceNode.target = "_blank";
        sourceNode.className = 'brizer-li';
        sourceNode.innerText = `放放的源码分析`;
        nameDom.parentNode.appendChild(sourceNode);
      }
    });
}