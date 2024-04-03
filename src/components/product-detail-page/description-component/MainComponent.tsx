import React from "react";
import styles from "./MainComponent.module.css";
import TextCompoent from "./TextCompoent";
import ListComponent from "./ListComponent";
import { home_chair_img } from "../../../assets/images";
const MainComponent = () => {
  return (
    <React.Fragment>
      <div className={styles["main-component"]}>
        <img src={home_chair_img} alt="" />
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
