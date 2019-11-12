import React, { FunctionComponent, useEffect, useState } from "react";
import infoConfig from "../data/info";
import Articles from "../components/Articles";

interface IInfoprops {}

const Info: FunctionComponent<any> = (props: IInfoprops) => {
  const [infoList, setInfoList] = useState([]);

  useEffect(() => {
    const fetchList: Promise<any>[] = [];
    infoConfig.map(v => {
      if(!v.enable){return}
      fetchList.push(
        fetch(v.fetch,v.fetchObj||{})
          .then(v.cb)
      );
    });
    Promise.all(fetchList)
      .then(d => setInfoList(d))
      .catch(e => {
        console.error(`接口请求错误，请排查`);
        throw e;
      });
  }, []);
  return (
    <div>
      {Object.keys(infoList).map((k) => (
        <Articles key={k} list={infoList[k]}></Articles>
      ))}
    </div>
  );
};

export default Info;
