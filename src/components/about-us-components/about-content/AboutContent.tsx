import React from "react";
import styles from "./AboutContent.module.css";
const AboutContent = () => {
  return (
    <React.Fragment>
      <div className={styles["about-content"]}>
        <div className={styles["container"]}>
          <div className={styles["text-container-1"]}>
            <div>
            <p className={styles["para-1"]}>Problems trying</p>
            <h3 className={styles["para-2"]}>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </h3>
            </div>
          </div>
          <div className={styles["text-container-2"]}>
            <p className={styles["para-3"]}>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutContent;
