import React, { FunctionComponent } from "react";
import Urls from "../components/Urls";
import urlsGroup from "../data/urls";

interface IUrlprops {
  
}

const Url: FunctionComponent<any> = (props: IUrlprops) => {
  return (
    <div>
      {Object.keys(urlsGroup).map((k,i)=>(
        <Urls key={i} title={k} links={urlsGroup[k]}></Urls>
      ))}
    </div>
  );
};

export default Url;
