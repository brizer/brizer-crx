import { useEffect } from "react";
import allSettled from "promise.allsettled";
import  Parser from  "rss-parser";
import { InfoList, InfoConfigList } from "definitions";
const parser = new Parser();
function useFetchInfo(
  infoConfig: InfoConfigList,
  callback: (list: InfoList[]) => any,
  params: any[] = []
) {
  useEffect(() => {
    const fetchList: Promise<any>[] = [];
    infoConfig.map(v => {
      if (!v.enable) {
        return;
      }
      fetchList.push(parser.parseURL(v.fetch).then(v.cb));
    });
    allSettled(fetchList)
      .then(d => {
        //Two-dimensional array
        let list: InfoList[] = [];
        d.forEach((v, i) => {
          if (v.status === "fulfilled") {
            list.push(v.value);
          }
          if (v.status === "rejected") {
            console.error(`第${i}个接口返回处理过程出现错误`);
            console.error(v.reason);
          }
        });
        callback(list);
      })
      .catch(e => {
        console.error(`接口请求错误，请排查`);
        throw e;
      });
  }, params);
}
export default useFetchInfo;
