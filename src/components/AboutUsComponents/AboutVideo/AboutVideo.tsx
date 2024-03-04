import React from "react";
import styles from "./AboutVideo.module.css";
import image from "../../../assets/unsplash_T_Qe4QlMIvQ.svg";
import play from "../../../assets/Vector (13).svg";
const AboutVideo = () => {
  return (
    <React.Fragment>
      <div className={styles["about-video"]}>
        <div className={styles["container"]}>
          <img src={image} className={styles['main_img']} alt="" />
          <div className={styles["play-btn-container"]}>
            <button className={styles["play-btn"]}>
              <img src={play} alt="" />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutVideo;
