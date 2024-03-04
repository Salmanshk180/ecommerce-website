import React from "react";
import styles from "./ContactUs.module.css";
import Header from "../../components/HomeComponents/Header/Header";
import Footer from "../../components/HomeComponents/Footer/Footer";
import background from "../../assets/background.svg";
import ContactTestimonial from "./ContactTestimonial";
const ContactUs = () => {
  return (
    <React.Fragment>
      <Header />
      <div className={styles["contact_us"]}>
        <div className={styles["container"]}>
          <img src={background} alt="" />
          <div className={styles["text_container"]}>
            <p className={styles['para-1']}>Questions & Answers</p>
            <p className={styles['para-2']}>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics:{" "}
            </p>
            <button className={styles['contact-btn']}>CONTACT US</button>
          </div>
        </div>
      </div>
        <ContactTestimonial/>
      <Footer />
    </React.Fragment>
  );
};

export default ContactUs;
