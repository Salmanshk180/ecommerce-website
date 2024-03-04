import React from "react";
import styles from "./AboutUs.module.css";
import LightNavbar from "../../components/HomeComponents/Navbars/LightNavbar";
import AboutHeader from "../../components/AboutUsComponents/AboutHeader/AboutHeader";
import Footer from "../../components/HomeComponents/Footer/Footer";
import AboutContent from "../../components/AboutUsComponents/AboutContent/AboutContent";
const AboutUs = () => {
  return (
    <React.Fragment>
      <div className={styles["about-us"]}>
        <div className={styles["container"]}>
          <LightNavbar />
          <AboutHeader />
          <AboutContent />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
