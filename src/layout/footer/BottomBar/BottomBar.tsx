import React from "react";
import styles from "./BottomBar.module.css";
const BottomBar = () => {
  return (
    <React.Fragment>
      <div className={styles.bottom_bar}>
        <p className={styles.footer_greetings}>
          Made With Love By Finland All Rights
        </p>
      </div>
    </React.Fragment>
  );
};

export default BottomBar;
