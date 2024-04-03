import React from "react";
import styles from "./DarkNavbar.module.css";
import { phone_img,email_img,instagram_img,facebook_img,youtube_img,twitter_img } from "../../../../assets/images";

interface Props {
  background_color: string;
}

const DarkNavbar = (props: Props) => {
  return (
    <React.Fragment>
      <div
        className={styles["dark-nav-container"]}
        style={{ backgroundColor: props.background_color }}
      >
        <div className={styles["container"]}>
          <div className={styles["contact-details"]}>
            <div className={styles["phone-details"]}>
              <img src={phone_img} alt="phone" />
              <h6>(225) 555-0118</h6>
            </div>
            <div className={styles["email-details"]}>
              <img src={email_img} alt="email" />
              <h6>michelle.rivera@example.com</h6>
            </div>
          </div>
          <div className={styles["dark-nav-desc"]}>
            <h6>Follow Us and get a chance to win 80% off</h6>
          </div>
          <div className={styles["social-media-links"]}>
            <h6>Follow Us :</h6>
            <div className={styles["social-media-links-container"]}>
              <img src={instagram_img} alt="instagram" />
              <img src={youtube_img} alt="twitter" />
              <img src={facebook_img} alt="facebook" />
              <img src={twitter_img} alt="twitter" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DarkNavbar;
