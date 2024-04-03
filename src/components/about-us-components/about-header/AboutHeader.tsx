import React from "react";
import styles from "./AboutHeader.module.css";
import { none_img } from "../../../assets/images";
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
            <img src={none_img} className={styles['header_img']} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutHeader;
