import React, { FunctionComponent } from "react";
import styles from "./Articles.less";
import { IInfoListItem } from "../../../definitions";

type ArticlesProps  = {
  list: Array<IInfoListItem>
}
const Articles: FunctionComponent<any> = (props: ArticlesProps) => {
  const { list } = props;
  return (
    <div className={styles.contain}>
      {list.map((k, i) => (
        k.html  ? (
          <div key={i} dangerouslySetInnerHTML={{ __html: k.html }}></div>
        ) : 
          <div key={i} className={styles.item}>
            <span className={styles.tag}> {k.title}</span>
            <a className={styles.link} target="_blank" href={k.link}>
              {k.name}
            </a>
          </div>
        ))}
    </div>
  );
};

export default Articles;
