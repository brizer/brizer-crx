import { isMyKey } from "./key";

export interface IInfoConfig {
  enable: boolean;
  fetch: RequestInfo;
  fetchObj?: RequestInit;
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
    enable: true,
    fetch: process.env.NODE_ENV === "production"?"https://cnodejs.org/api/v1/topics":'/api/cnode.json',
    title: "CNode社区",
    cb: async function(data: any) {
      data = await data.json();
      const { data: resultList } = data;
      const list: InfoList = [];
      resultList.map(
        v =>
          isMyKey(v.title) &&
          list.push({
            name: v.title,
            link: `https://cnodejs.org/topic/${v.id}`,
            title: "CNode社区"
          })
      );
      return Promise.resolve(list);
    }
  },
  {
    enable: true,
    fetch: "https://web-api.juejin.im/query",
    fetchObj: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Agent": "Juejin/Web"
      },
      body: JSON.stringify({
        operationName: "",
        query: "",
        variables: {
          tags: [],
          category: "5562b415e4b00c57d9b94ac8",
          first: 20,
          after: "",
          order: "POPULAR"
        },
        extensions: { query: { id: "653b587c5c7c8a00ddf67fc66f989d42" } }
      })
    },
    title: "掘金",
    cb: async function(data) {
      data = await data.json();
      const {
        data: {
          articleFeed: {
            items: { edges }
          }
        }
      } = data;
      const list: InfoList = [];
      edges.map(
        v =>
          isMyKey(v.node.title) &&
          list.push({
            name: v.node.title,
            link: v.node.originalUrl,
            title: "掘金-前端"
          })
      );
      return Promise.resolve(list);
    }
  },
  {
    enable: process.env.NODE_ENV === "production",
    fetch: "https://www.v2ex.com/api/topics/hot.json",
    title: "V2EX",
    cb: async function(data: any) {
      data = await data.json();
      const list: InfoList = [];
      data.map(
        v =>
          isMyKey(v.title) &&
          list.push({
            name: v.title,
            link: v.url,
            title: "V2EX"
          })
      );
      return Promise.resolve(list);
    }
  },
  {
    enable:true,
    fetch:process.env.NODE_ENV === "production"?"https://medium.com/tag/javascript":"/api/medium.html",
    title: "medium",
    cb: async function(data:any) {
      data = await data.text();
      const regex = /window\[\"obvInit\"\]\((.*)\)\n\/\/\s\]\]\>/;
      const res = data.match(regex);
      const infoObj = JSON.parse(res[1]);
      const list: InfoList = [];
      Object.keys(infoObj.references.Post).map(v=>{
        isMyKey(infoObj.references.Post[v].title) &&
        list.push({
          name:infoObj.references.Post[v].title,
          link:`https://medium.com/javascript-scene/${infoObj.references.Post[v].uniqueSlug}`,
          title:'medium'
        })
      })
      console.warn(infoObj);
      return Promise.resolve(list);
    }
  },
  {
    enable: process.env.NODE_ENV === "production",
    fetch:
      "https://www.yuque.com/api/books/75258/docs?include_contributors=true&include_hits=true&limit=20&offset=0",
    title: "egg团队专栏",
    cb: async function(data: any) {
      data = await data.json();
      const list: InfoList = [];
      data.data.map(
        v =>
          isMyKey(v.title) &&
          list.push({
            name: v.title,
            link: `https://www.yuque.com/egg/nodejs/${v.slug}`,
            title: "egg团队专栏"
          })
      );
      return Promise.resolve(list);
    }
  }
];
export default infoConfig;
