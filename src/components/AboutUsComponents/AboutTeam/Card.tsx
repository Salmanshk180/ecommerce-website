import React from "react";
import styles from "./Card.module.css";
import facebook from "../../../assets/footer_1.svg";
import instagram from "../../../assets/footer_2.svg";
import twitter from "../../../assets/footer_3.svg";
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
