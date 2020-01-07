import React, { FunctionComponent, useState } from "react";
import infoConfig from "../data/info";
import rssInfoConfig from "../data/info_rss";
import Articles from "../components/Articles";
import useFetchInfo from "../../../hooks/useFetchInfo";
import useRssInfo from "../../../hooks/useRssInfo";

interface IInfoprops {}

const Info: FunctionComponent<any> = (props: IInfoprops) => {
  const [infoList, setInfoList] = useState([]);
  const [rssInfoList, setRssInfoList] = useState([]);
  useFetchInfo(infoConfig,setInfoList,[]);
  useRssInfo(rssInfoConfig,setRssInfoList,[])

  return (
    <div>
      {Object.keys(infoList).map(k => (
        <Articles key={k} list={infoList[k]}></Articles>
      ))}
      {Object.keys(rssInfoList).map(k => (
        <Articles key={k} list={rssInfoList[k]}></Articles>
      ))}
    </div>
  );
};

export default Info;
