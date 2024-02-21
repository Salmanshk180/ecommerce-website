import { Fragment } from "react";
import styles from "./Card.module.css";
interface Props {
  src: string;
  title: string;
  description: string;
  price: number;
  original_price: number;
}

const Card = (props: Props) => {
  return (
    <Fragment>
      <div className={styles.card}>
        <img src={props.src} alt="" />
        <div className={styles.desc}>
          <h6 className={styles.title}>{props.title}</h6>
          <h6 className={styles.description}>{props.description}</h6>
          <div className={styles.price_container}>
            <h6 className={styles.original_price}>${props.original_price}</h6>
            <h6 className={styles.price}>${props.price}</h6>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
