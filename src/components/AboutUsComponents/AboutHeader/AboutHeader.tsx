import React from "react";
import styles from "./AboutHeader.module.css";
import header_img from "../../../assets/none (1).svg";
const AboutHeader = () => {
  return (
    <React.Fragment>
      <div className={styles["about-header"]}>
        <div className={styles["container"]}>
          <div className={styles["text-container"]}>
            <h5>ABOUT COMPANY</h5>
            <h1>ABOUT US</h1>
            <h4>
              We know how large objects will act, but things on a small scale
            </h4>
            <button className={styles["quote-btn"]}>Get Quote Now</button>
          </div>
          <div className={styles["img-container"]}>
            <img src={header_img} className={styles['header_img']} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutHeader;
