import { isMyKey } from "./key";
import { InfoConfigList, InfoList } from "definitions";


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
    fetch: "https://e.xitu.io/resources/gold",
    fetchObj: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"category":"frontend","order":"heat","offset":0,"limit":80})
    },
    title: "掘金",
    cb: async function(data) {
      data = await data.json();
      const {
        data:infos
      } = data;
      const list: InfoList = [];
      infos.map(
        v =>
          isMyKey(v.title) &&
          list.push({
            name: v.title,
            link: v.url,
            title: "掘金"
          })
      );
      return Promise.resolve(list);
    }
  },
  {
    enable: true,
    fetch: "https://e.xitu.io/resources/cnblogs",
    fetchObj: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"offset":0,"limit":80})
    },
    title: "博客园",
    cb: async function(data) {
      data = await data.json();
      const {
        data:infos
      } = data;
      const list: InfoList = [];
      infos.map(
        v =>
          isMyKey(v.title) &&
          list.push({
            name: v.title,
            link: v.url,
            title: "博客园"
          })
      );
      return Promise.resolve(list);
    }
  },
  {
    enable: true,
    fetch: "https://e.xitu.io/resources/wanqu",
    fetchObj: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"offset":0,"limit":80})
    },
    title: "湾区日报",
    cb: async function(data) {
      data = await data.json();
      const {
        data:infos
      } = data;
      const list: InfoList = [];
      infos.map(
        v =>
          isMyKey(v.title) &&
          list.push({
            name: v.title,
            link: v.url,
            title: "湾区日报"
          })
      );
      return Promise.resolve(list);
    }
  },
  {
    enable: true,
    fetch: "https://e.xitu.io/resources/ithome",
    fetchObj: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"offset":0,"limit":80})
    },
    title: "it之家",
    cb: async function(data) {
      data = await data.json();
      const {
        data:infos
      } = data;
      const list: InfoList = [];
      infos.map(
        v =>
          isMyKey(v.title) &&
          list.push({
            name: v.title,
            link: v.url,
            title: "it之家"
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
  }
];
export default infoConfig;
