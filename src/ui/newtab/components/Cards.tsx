import React, { FunctionComponent } from "react";
import styles from "./Cards.less";
import { ICardListItem } from "../data/open"

interface ICardsProps {
  list: ICardListItem[];
}

const Cards: FunctionComponent<any> = (props: ICardsProps) => {
  const { list } = props;
  return (
    <div className={styles.contain}>
      {list.map((k, i) => (
        <div key={i} className={styles.item}>
          <a className={styles.link} target="_blank" href={k.link}>
            {k.name}
          </a>
          <span style={{
            backgroundColor:k.color
          }}>{k.language}</span>
          <span className={styles.tag}> {k.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Cards;
