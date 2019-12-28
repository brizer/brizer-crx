import React, { FunctionComponent, useState } from "react";
import infoConfig from "../data/open";

import Cards from "../components/Cards";
import useFetchInfo from "../../../hooks/useFetchInfo";

interface IOpenprops {}

const Info: FunctionComponent<any> = (props: IOpenprops) => {
  const [infoList, setInfoList] = useState([]);

  useFetchInfo(infoConfig,setInfoList,[]);
  return (
    <div>
      {Object.keys(infoList).map(k => (
        <Cards key={k} list={infoList[k]}></Cards>
      ))}
    </div>
  );
};

export default Info;
