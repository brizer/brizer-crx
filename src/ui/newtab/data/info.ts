export interface IInfoConfig {
  enable:boolean,
  fetch: string;
  title: string;
  cb: (data: any) => Promise<InfoList>;
}

export interface IInfoListItem {
  name: string;
  link: string;
  title: string;
}

type InfoList = IInfoListItem[];

export type InfoConfigList = IInfoConfig[];

const infoConfig: InfoConfigList = [
  {
    enable:true,
    fetch: "https://cnodejs.org/api/v1/topics",
    title: "CNode社区",
    cb:async function(data: any) {
      data = await data.json();
      const { data: resultList  } = data;
      const list:InfoList = resultList.map(v => ({
        name: v.title,
        link: `https://cnodejs.org/topic/${v.id}`,
        title: 'CNode社区'
      }));
      return Promise.resolve(list);
    }
  },
  {
    enable:false,
    fetch: "https://www.v2ex.com/api/topics/hot.json",
    title: "V2EX",
    cb:async function(data: any) {
      data = await data.json();
      const list:InfoList = data.map(v => ({
        name: v.title,
        link: v.url,
        title: 'V2EX'
      }));
      return Promise.resolve(list);
    }
  }
];
export default infoConfig;
