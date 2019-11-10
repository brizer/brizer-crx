import React, { FunctionComponent } from "react";
import { IUrl } from "../data/urls";
import styles from "./Urls.less";

interface IUrlprops {
  title:string,
  links:IUrl[]
}

const Urls: FunctionComponent<any> = (props: IUrlprops) => {
  return (
    <div>
        <h2 className={styles.title}>{props.title}</h2>
        <ul className={styles.list}>
          {props.links.map((k,i)=>(
            <li key={i} className={styles.item}>
              <a href={k.url} target="_blank;">{k.name}</a>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Urls;
