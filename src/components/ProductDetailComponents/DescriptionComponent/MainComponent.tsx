import React from "react";
import styles from "./MainComponent.module.css";
import TextCompoent from "./TextCompoent";
import ListComponent from "./ListComponent";
import cover from "../../../assets/unsplash_QANOF9iJlFs.svg";
const MainComponent = () => {
  return (
    <React.Fragment>
      <div className={styles["main-component"]}>
        <img src={cover} alt="" />
        <div className={styles['first_container']}>
          <TextCompoent />
        </div>
        <div className={styles['second_container']}>
          <ListComponent />
          <ListComponent />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainComponent;
