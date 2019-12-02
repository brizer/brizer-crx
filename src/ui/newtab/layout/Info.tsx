import React, { FunctionComponent, useEffect, useState } from "react";
import infoConfig, { InfoList } from "../data/info";
import Articles from "../components/Articles";
import allSettled from "promise.allsettled";

interface IInfoprops {}

const Info: FunctionComponent<any> = (props: IInfoprops) => {
  const [infoList, setInfoList] = useState([]);

  useEffect(() => {
    const fetchList: Promise<any>[] = [];
    infoConfig.map(v => {
      if (!v.enable) {
        return;
      }
      fetchList.push(fetch(v.fetch, v.fetchObj || {}).then(v.cb));
    });
    allSettled(fetchList)
      .then(d => {
        //Two-dimensional array
        let list:InfoList[] = [];
        d.forEach((v,i) => {
          if (v.status === "fulfilled") {
            list.push(v.value);
          }
          if (v.status === "rejected") {
            console.error(`第${i}个接口返回处理过程出现错误`);
            console.error(v.reason);
          }
        });
        setInfoList(list);
      })
      .catch(e => {
        console.error(`接口请求错误，请排查`);
        throw e;
      });
  }, []);
  return (
    <div>
      {Object.keys(infoList).map(k => (
        <Articles key={k} list={infoList[k]}></Articles>
      ))}
    </div>
  );
};

export default Info;
