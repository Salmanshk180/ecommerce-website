import React, { Fragment } from "react";
import styles from "./ShopHeader.module.css";
import technology from "../../../assets/technology 1.svg";

const ShopHeader = () => {
  return (
    <Fragment>
      <div className={styles.ShopHeader}>
        <div className={styles.container}>
          <div className={styles.description}>
            <h5>SUMMER 2020</h5>
            <h1>NEW COLLECTION</h1>
            <h4>
              We know how large objects will act, but things on a small scale.
            </h4>
            <button>SHOP NOW</button>
          </div>
          <div className={styles.img_container}>
            <img src={technology} alt="girl" id={styles.technology}/>
            <div className={styles.circle_1}></div>
            <div className={styles.circle_2}></div>
            <div className={styles.circle_3}></div>
            <div  className={styles.circle_4}></div>
            <div className={styles.circle_5}></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ShopHeader;
