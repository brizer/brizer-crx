import { parseStr2Dom } from "../../../utils/dom";
import { InfoConfigList, JobList } from "definitions";

const rssInfoConfig: InfoConfigList = [
  {
    enable: true,
    fetch: process.env.NODE_ENV === "production"?"https://rsshub.app/lagou/jobs/JavaScript/%E6%AD%A6%E6%B1%89":'/api/rss/jobs.json',
    title: "拉勾-wuhan",
    cb: async function(data: any) {
      const { items } = data;
      console.log(data);
      const list:JobList =  [];
      items.map((item,index)=>{
          list.push({
            title:item.title,
            link:item.link,
            description:item.contentSnippet,
            pubDate:item.pubDate,
            author:item.author
          })
      })
      return Promise.resolve(list);
    }
  },
  {
    enable: true,
    fetch: process.env.NODE_ENV === "production"?"https://rsshub.app/lagou/jobs/Node/%E6%AD%A6%E6%B1%89":'/api/rss/jobs.json',
    title: "拉勾-wuhan",
    cb: async function(data: any) {
      const { items } = data;
      console.log(data);
      const list:JobList =  [];
      items.map((item,index)=>{
          list.push({
            title:item.title,
            link:item.link,
            description:item.contentSnippet,
            pubDate:item.pubDate,
            author:item.author
          })
      })
      return Promise.resolve(list);
    }
   
  },
  {
    enable: true,
    fetch: process.env.NODE_ENV === "production"?"https://rsshub.app/lagou/jobs/Vue/%E6%AD%A6%E6%B1%89":'/api/rss/jobs.json',
    title: "拉勾-wuhan",
    cb: async function(data: any) {
      const { items } = data;
      console.log(data);
      const list:JobList =  [];
      items.map((item,index)=>{
          list.push({
            title:item.title,
            link:item.link,
            description:item.contentSnippet,
            pubDate:item.pubDate,
            author:item.author
          })
      })
      return Promise.resolve(list);
    }
   
  },
  {
    enable: true,
    fetch: process.env.NODE_ENV === "production"?"https://rsshub.app/lagou/jobs/React/%E6%AD%A6%E6%B1%89":'/api/rss/jobs.json',
    title: "拉勾-wuhan",
    cb: async function(data: any) {
      const { items } = data;
      console.log(data);
      const list:JobList =  [];
      items.map((item,index)=>{
          list.push({
            title:item.title,
            link:item.link,
            description:item.contentSnippet,
            pubDate:item.pubDate,
            author:item.author
          })
      })
      return Promise.resolve(list);
    }
   
  },
  {
    enable: true,
    fetch: process.env.NODE_ENV === "production"?"https://rsshub.app/lagou/jobs/html/%E6%AD%A6%E6%B1%89":'/api/rss/jobs.json',
    title: "拉勾-wuhan",
    cb: async function(data: any) {
      const { items } = data;
      console.log(data);
      const list:JobList =  [];
      items.map((item,index)=>{
          list.push({
            title:item.title,
            link:item.link,
            description:item.contentSnippet,
            pubDate:item.pubDate,
            author:item.author
          })
      })
      return Promise.resolve(list);
    }
   
  },
  {
    enable: true,
    fetch: process.env.NODE_ENV === "production"?"https://rsshub.app/lagou/jobs/前端/%E6%AD%A6%E6%B1%89":'/api/rss/jobs.json',
    title: "拉勾-wuhan",
    cb: async function(data: any) {
      const { items } = data;
      console.log(data);
      const list:JobList =  [];
      items.map((item,index)=>{
          list.push({
            title:item.title,
            link:item.link,
            description:item.contentSnippet,
            pubDate:item.pubDate,
            author:item.author
          })
      })
      return Promise.resolve(list);
    }
   
  },  {
    enable: true,
    fetch: process.env.NODE_ENV === "production"?"https://rsshub.app/nowcoder/jobcenter/2/%E6%AD%A6%E6%B1%89/5/1/false":'/api/rss/niukejobs.json',
    title: "牛客-wuhan",
    cb: async function(data: any) {
      const { items } = data;
      console.log(data);
      const list:JobList =  [];
      items.map((item,index)=>{
          list.push({
            title:item.title,
            link:item.link,
            description:item.contentSnippet,
            pubDate:item.pubDate,
            author:item.author
          })
      })
      return Promise.resolve(list);
    }
   
  }
];
export default rssInfoConfig;
