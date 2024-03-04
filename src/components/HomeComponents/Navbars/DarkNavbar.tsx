import React, { FC, Fragment } from "react";
import styles from "./DarkNavbar.module.css";
import phone from "../../../assets/phone.svg";
import email from "../../../assets/email.svg";
import instagram from "../../../assets/instagram.svg";
import facebook from "../../../assets/facebook.svg";
import twitter from "../../../assets/twitter.svg";
import youtube from "../../../assets/youtube.svg";
  interface Props{
    background_color: string;
  }
const DarkNavbar= (props:Props) => {
  return (
    <Fragment>
        <div className={styles["dark-nav-container"]} style={{backgroundColor:props.background_color}}>
          <div className={styles["container"]}>
            <div className={styles["contact-details"]}>
              <div className={styles["phone-details"]}>
                <img src={phone} alt="phone" />
                <h6>(225) 555-0118</h6>
              </div>
              <div className={styles["email-details"]}>
                <img src={email} alt="email" />
                <h6>michelle.rivera@example.com</h6>
              </div>
            </div>
            <div className={styles["dark-nav-desc"]}>
              <h6>Follow Us and get a chance to win 80% off</h6>
            </div>
            <div className={styles["social-media-links"]}>
              <h6>Follow Us :</h6>
              <div className={styles["social-media-links-container"]}>
                <img src={instagram} alt="instagram" />
                <img src={youtube} alt="twitter" />
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
};

export default DarkNavbar;
