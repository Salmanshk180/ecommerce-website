import React from "react";
import styles from "./AboutUs.module.css";
import AboutHeader from "../../components/about-us-components/about-header/AboutHeader";
import AboutContent from "../../components/about-us-components/about-content/AboutContent";
import AboutStats from "../../components/about-us-components/about-stats/AboutStats";
import AboutVideo from "../../components/about-us-components/about-video/AboutVideo";
import AboutTeam from "../../components/about-us-components/about-team/AboutTeam";
import AboutClients from "../../components/about-us-components/about-clients/AboutClients";
import Testimonial from "../../components/about-us-components/testimonial/Testimonial";
const AboutUs = () => {
  return (
    <React.Fragment>
      <div className={styles["about-us"]}>
        <div className={styles["container"]}>
          <AboutHeader />
          <AboutContent />
          <AboutStats />
          <AboutVideo />
          <AboutTeam />
          <AboutClients />
          <Testimonial />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
