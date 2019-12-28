import React, { FunctionComponent } from "react";
import styles from "./Articles.less";
import { IInfoListItem } from "definitions";

interface IArticlesProps {
  list: IInfoListItem[];
}

const Articles: FunctionComponent<any> = (props: IArticlesProps) => {
  const { list } = props;
  return (
    <div className={styles.contain}>
      {list.map((k, i) => (
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
