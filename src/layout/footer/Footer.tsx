import React from "react";
import styles from "./Footer.module.css";
import TopBar from "./TopBar/TopBar";
import BottomBar from "./BottomBar/BottomBar";
import FooterContent from "./FooterContent/FooterContent";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={styles["footer_container"]}>
      <div className={styles['outer_container']}>
        <TopBar />
      </div>
        <FooterContent />
        <div className={styles['outer_container']}>
        <BottomBar />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
