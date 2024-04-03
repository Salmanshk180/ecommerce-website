import React from "react";
import styles from "./ShopHeader.module.css";
import { technology_img } from "../../../assets/images";
import Button from "../../../UI/Button/Button";
const ShopHeader = () => {
  return (
    <React.Fragment>
      <div className={styles["ShopHeader"]}>
        <div className={styles["container"]}>
          <div className={styles["description"]}>
            <h5>SUMMER 2020</h5>
            <h1>NEW COLLECTION</h1>
            <h4>
              We know how large objects will act, but things on a small scale.
            </h4>
            {/* <button>SHOP NOW</button> */}
            <Button
              text="SHOP NOW"
              padding="15px 40px"
              borderRadius="5px"
              backgroundColor="#23a6f0"
              border="none"
              color="#fff"
              fontSize={24}
            />
          </div>
          <div className={styles["img_container"]}>
            <img src={technology_img} alt="girl" id={styles["technology"]} />
            <div className={styles["circle_1"]}></div>
            <div className={styles["circle_2"]}></div>
            <div className={styles["circle_3"]}></div>
            <div className={styles["circle_4"]}></div>
            <div className={styles["circle_5"]}></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShopHeader;
