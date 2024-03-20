import React from "react";
import styles from "./ContactUs.module.css";
import ContactTestimonial from "./ContactTestimonial";
import { background_img } from "../../assets/images";
const ContactUs = () => {
  return (
    <React.Fragment>
      <div className={styles["contact_us"]}>
        <div className={styles["container"]}>
          <img src={background_img} alt="" />
          <div className={styles["text_container"]}>
            <p className={styles["para-1"]}>Questions & Answers</p>
            <p className={styles["para-2"]}>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics:{" "}
            </p>
            <button className={styles["contact-btn"]}>CONTACT US</button>
          </div>
        </div>
      </div>
      <ContactTestimonial />
    </React.Fragment>
  );
};

export default ContactUs;
