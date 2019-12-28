import { InfoConfigList, IInfoListItem, InfoList } from "definitions";
import { parseStr2Dom } from "../../../utils/dom";

export interface ICardListItem extends IInfoListItem {
  language: string;
  color: string;
}

async function commonGitCallback(data:Response){
  const str: string = await data.text();
  const dom = parseStr2Dom(str);
  const boxList: NodeListOf<HTMLElement> = dom.querySelectorAll(".Box-row");

  const list: ICardListItem[] = [];
  boxList.forEach(box => {
    const titleDom: HTMLElement = box.querySelector(".lh-condensed");
    const desDom: HTMLElement = box.querySelector(
      ".col-9.text-gray.my-1.pr-4"
    );
    const languageDom: HTMLElement = box.querySelector(
      ".d-inline-block.ml-0.mr-3"
    );
    const colorDom: HTMLElement = languageDom?.querySelector('.repo-language-color');
    const { innerText: title } = titleDom;
    const { innerText: description = "" } = desDom ?? {};
    const { innerText: language = "" } = languageDom ?? {};
    const { attributes } = titleDom.querySelector("a");
    const color = colorDom?.style?.backgroundColor;
    list.push({
      name: `${title}`,
      link: `https://github.com${attributes["href"].value.trim()}`,
      title: `${description.trim()}`,
      language,
      color
    });
  });
  return Promise.resolve(list);
}

const openConfig: InfoConfigList = [
  {
    enable: true,
    fetch:
      process.env.NODE_ENV === "production"
        ? "https://github.com/trending?since=weekly"
        : "/api/github/trend/weekly/all.html",
    title: "Github趋势榜",
    cb: commonGitCallback.bind(this)
  },{
    enable: true,
    fetch:
      process.env.NODE_ENV === "production"
        ? "https://github.com/trending/javascript?since=weekly"
        : "/api/github/trend/weekly/javascript.html",
    title: "Github趋势榜",
    cb: commonGitCallback.bind(this)
  },{
    enable: true,
    fetch:
      process.env.NODE_ENV === "production"
        ? "https://github.com/trending/typescript?since=weekly"
        : "/api/github/trend/weekly/typescript.html",
    title: "Github趋势榜",
    cb: commonGitCallback.bind(this)
  },
];
export default openConfig;
