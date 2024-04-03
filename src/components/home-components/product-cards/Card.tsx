import { Fragment } from "react";
import styles from "./Card.module.css";
import Color from "../feature-blogs/color/Color";
interface Props {
  id?:string;
  src: string;
  title: string;
  description: string;
  price: number;
  original_price: number;
  show_colors: boolean;
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
          {props.show_colors ? (
            <div className={styles.color_container}>
              <Color classname="first_color" />
              <Color classname="second_color" />
              <Color classname="third_color" />
              <Color classname="fourth_color" />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
