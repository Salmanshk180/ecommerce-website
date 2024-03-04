import React from "react";
import styles from "./Card.module.css";
import facebook from "../../../assets/facebook.svg";
import instagram from "../../../assets/instagram.svg";
import twitter from "../../../assets/twitter.svg";
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
          <p>{props.name}</p>
          <p>{props.profession}</p>
          <div className={styles["social-media"]}>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
