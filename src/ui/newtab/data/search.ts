import cheerio from "cheerio";
import axios, { AxiosResponse } from "axios";

export interface ISearch {
  enable: boolean;
  label: string;
  placeholder: string;
  link: string;
  onClick?: (str: string) => unknown;
}

type ISearchList = ISearch[];

let usedList: any = [];
let limitPage = 10;
const showTopNumber = 200;
let curPage: number = 1;
function showList() {
//   console.log(
  console.table(
    usedList
      .sort((a: any, b: any) => {
        return b.star - a.star;
      })
      .slice(0, showTopNumber)
  );
}
function setUsedList(dom: CheerioStatic) {
  const list = dom(".Box-row.d-flex.flex-items-center");
  list.map((index, item) => {
    const children = item.children;
    const nameSpan = children[3];
    const starDiv = children[5];
    const spanChild = nameSpan.childNodes;
    const nameNode = spanChild[3];
    const textNode = nameNode.childNodes[0];
    const text = textNode.data;
    const packageNode = spanChild[1];
    const packageName = packageNode.childNodes[0].data;
    const allName = `${packageName}/${text}`;
    const star = (starDiv.childNodes[1].childNodes[2].data || "").trim();
    usedList.push({
      name: allName,
      star: Number(star),
      link: `https://github.com/${allName}`,
    });
  });
}
function getNextId(context: string) {
  const dom = cheerio.load(context);
  const nextBtn = dom(".btn.btn-outline.BtnGroup-item")[1];
  setUsedList(dom);
  const disable = nextBtn.attribs.disable === "disabled";
  if (disable || curPage > limitPage) {
    return null;
  }
  curPage++;
  return nextBtn.attribs.href;
}

async function getInfo(url: string) {
  console.log(`fetching ${url}`);
  let homePageContent;
  try {
    homePageContent = await axios(url, { timeout: 10000 });
  } catch (error) {
    console.log(`error in fetching`);
    console.error(error);
    showList();
  }

  console.log("finish fetching");
  const homePageBody = await (homePageContent as AxiosResponse).data;
  const nextIds = getNextId(homePageBody);
  if (!nextIds) {
    showList();
  } else {
    await getInfo(nextIds as string);
  }
}

const searchList: ISearchList = [
  {
    enable: true,
    label: "我的标星库",
    placeholder: "在github我的标星项目中搜索",
    link: "https://github.com/brizer?tab=stars&utf8=%E2%9C%93&q=&q=${name}",
  },
  {
    enable: true,
    label: "源码分析库",
    placeholder: "在github我的源码阅读库中搜索",
    link:
      "https://github.com/FunnyLiu?utf8=%E2%9C%93&q=${name}&type=&language=",
  },
  {
    enable: true,
    label: "npm库",
    placeholder: "在npm官方库中搜索",
    link: "https://www.npmjs.com/search?q=${name}",
  },
  {
    enable: true,
    label: "git使用排行",
    placeholder: "git使用排行，控制台查看",
    link: "",
    async onClick(str: string) {
      usedList = [];
      const name = str;
      try {
        await getInfo(`${name}/network/dependents`);
      } catch (error) {
        console.error(error);
      }
    },
  },
];

(window as any).topUsed = async function(str: string,limit:number=10) {
    usedList = [];
    limitPage = limit;
    const name = str;
    try {
      await getInfo(`${name}/network/dependents`);
    } catch (error) {
      console.error(error);
    }
  }

export default searchList;
