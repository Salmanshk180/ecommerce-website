import React from "react";
import styles from "./AboutVideo.module.css";
import { play_img, video_img } from "../../../assets/images";
const AboutVideo = () => {
  return (
    <React.Fragment>
      <div className={styles["about-video"]}>
        <div className={styles["container"]}>
          <img src={video_img} className={styles['main_img']} alt="" />
          <div className={styles["play-btn-container"]}>
            <button className={styles["play-btn"]}>
              <img src={play_img} alt="" />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutVideo;
