import React, { Fragment } from "react";
import styles from "./Card.module.css"
interface Props {
  src: string;
  title: string;
  items: number;
}
const Card = (props: Props) => {
  return (
    <Fragment>
      <div className={styles.card}>
        <img src={props.src} alt="" />
        <div className={styles.description}>
          <p>{props.title}</p>
          <p>{props.items}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
