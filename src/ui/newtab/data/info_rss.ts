import { isMyKey } from "./key";
import { parseStr2Dom } from "../../../utils/dom";
import { InfoConfigList, InfoList } from "definitions";

const rssInfoConfig: InfoConfigList = [
  {
    enable: true,
    fetch: process.env.NODE_ENV === "production"?"https://github.com/brizer.private.atom?token=ADAR5LNCUUCIG2KX7EAOIFV4EFVYW":'/api/rss/githubActive.json',
    title: "我的github动态",
    cb: async function(data: any) {
      const { items } = data;
      const list:InfoList =  [];
      items.map(item=>{
          const dom = parseStr2Dom(item.content)
          dom.querySelectorAll('a').forEach(a=>{
            a.href = a.href.replace('http://localhost:8080','https://github.com')
            a.target='_blank';
          })
          if(dom.querySelector('.watch_started')){
            list.push({html:dom.querySelector('.body').innerHTML})
          }
          if(dom.querySelector('.follow')){
            list.push({html:dom.querySelector('.body').innerHTML})
          }
      })
      return Promise.resolve(list);
    }
  }
];
export default rssInfoConfig;
