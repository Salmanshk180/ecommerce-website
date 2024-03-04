import React from "react";
import styles from "./AboutUs.module.css";
import LightNavbar from "../../components/HomeComponents/Navbars/LightNavbar";
import AboutHeader from "../../components/AboutUsComponents/AboutHeader/AboutHeader";
import Footer from "../../components/HomeComponents/Footer/Footer";
import AboutContent from "../../components/AboutUsComponents/AboutContent/AboutContent";
import AboutStats from "../../components/AboutUsComponents/AboutStats/AboutStats";
import AboutVideo from "../../components/AboutUsComponents/AboutVideo/AboutVideo";
const AboutUs = () => {
  return (
    <React.Fragment>
      <div className={styles["about-us"]}>
        <div className={styles["container"]}>
          <LightNavbar />
          <AboutHeader />
          <AboutContent />
          <AboutStats />
          <AboutVideo />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
