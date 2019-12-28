import React, { FunctionComponent, useState } from "react";
import infoConfig from "../data/info";
import Articles from "../components/Articles";
import useFetchInfo from "../../../hooks/useFetchInfo";

interface IInfoprops {}

const Info: FunctionComponent<any> = (props: IInfoprops) => {
  const [infoList, setInfoList] = useState([]);
  
  useFetchInfo(infoConfig,setInfoList,[]);

  return (
    <div>
      {Object.keys(infoList).map(k => (
        <Articles key={k} list={infoList[k]}></Articles>
      ))}
    </div>
  );
};

export default Info;
