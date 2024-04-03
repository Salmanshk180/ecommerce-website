import React from "react";
import styles from "./AboutClients.module.css";
import Clients from "../../home-components/clients/Clients";
const AboutClients = () => {
  return (
    <React.Fragment>
      <div className={styles["about-clients"]}>
        <div className={styles["container"]}>
          <div className={styles["text-container"]}>
            <p className={styles["text_heading"]}>Big Companies Are Here</p>
            <p className={styles["text-subheading"]}>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          <Clients />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutClients;
