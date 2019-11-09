import React, { FunctionComponent } from "react";
import Urls from "../components/Urls";
import urlsGroup from "../data/urls";

interface IUrlprops {
  
}

const Url: FunctionComponent<any> = (props: IUrlprops) => {
  return (
    <div>
      123
      {Object.keys(urlsGroup).map(k=>{
        (<Urls title={k} links={urlsGroup[k]}></Urls>)
      })}
    </div>
  );
};

export default Url;
