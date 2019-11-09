import React, { FunctionComponent } from "react";
import { IUrl } from "../data/urls";

interface IUrlprops {
  title:string,
  links:IUrl[]
}

const Urls: FunctionComponent<any> = (props: IUrlprops) => {
  return (
    <div>
        1245
        {props.title}
    </div>
  );
};

export default Urls;
