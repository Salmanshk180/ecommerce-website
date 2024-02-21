import { Fragment } from "react";
import styles from "./Footer.module.css";
import footer_1 from "../../../assets/footer_1.svg";
import footer_2 from "../../../assets/footer_2.svg";
import footer_3 from "../../../assets/footer_3.svg";
const Footer = () => {
  return (
    <Fragment>
      <div className={styles.footer}>
        <div className={styles.footer_container} id={styles.first_container}>
          <div className={styles.footer_bar}>
            <div className={styles.footer_logo}>
              <h4>Bandage</h4>
            </div>
            <div className={styles.footer_links}>
              <img src={footer_1} alt="" />
              <img src={footer_2} alt="" />
              <img src={footer_3} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.footer_container} id={styles.second_container}>
          <div className={styles.footer_content}>
            <div className={styles.footer_col_1}>
              <p className={styles.col_title}>Company Info</p>
              <p>About Us</p>
              <p>Carrier</p>
              <p>We are hiring</p>
              <p>Blog</p>
            </div>
            <div className={styles.footer_col_1}>
              <p className={styles.col_title}>Legal</p>
              <p>About Us</p>
              <p>Carrier</p>
              <p>We are hiring</p>
              <p>Blog</p>
            </div>{" "}
            <div className={styles.footer_col_1}>
              <p className={styles.col_title}>Features</p>
              <p>Business Marketing</p>
              <p>User Analytic</p>
              <p>Live Chat</p>
              <p>Unlimited Support</p>
            </div>{" "}
            <div className={styles.footer_col_1}>
              <p className={styles.col_title}>Resources</p>
              <p>IOS & Android</p>
              <p>Watch a Demo</p>
              <p>Customers</p>
              <p>Api</p>
            </div>{" "}
            <div className={styles.footer_col_1}>
              <p className={styles.col_title}>Get In Touch</p>
              <div>
                <input
                  type="text"
                  id={styles.footer_input}
                  placeholder="Your Email"
                />
                <button>Subscibe</button>
              </div>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
        <div className={styles.bottom_bar}>
          <div className={styles.footer_container} id={styles.first_container}>
            <div className={styles.bottom_bar_container}>
              <p className={styles.footer_greetings}>Made With Love By Finland All Rights</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
