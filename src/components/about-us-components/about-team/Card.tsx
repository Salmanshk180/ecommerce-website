import React from "react";
import styles from "./Card.module.css";
import { facebook_img, instagram_img, twitter_img } from "../../../assets/images";
interface Props {
  image: string;
  name: string;
  profession: string;
}

const Card = (props: Props) => {
  return (
    <React.Fragment>
      <div className={styles["card"]}>
        <img src={props.image} alt="" />
        <div className={styles["card-body"]}>
          <p className={styles['name']}>{props.name}</p>
          <p className={styles['profession']}>{props.profession}</p>
          <div className={styles["social-media"]}>
            <img src={facebook_img} alt="" />
            <img src={instagram_img} alt="" />
            <img src={twitter_img} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
