import { Fragment, useState, useRef } from "react";
import styles from "./Sidebar.module.css";
import Filter from "./Filter/Filter";
import Price from "./Price/Price";
import Brands from "./Brands/Brands";
interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
}
const Sidebar = (props: Props) => {
  const changeShow = () => {
    props.setShow(!props.show);
  };
  return (
    <Fragment>
      <div className={styles.sidebar}>
        <div
          className={`${styles["container"]} ${
            props.show ? styles["active"] : styles["inactive"]
          }`}
        >
          <p className={styles.title}>Filter By</p>
          <div className={styles.line}></div>
          <div className={styles["components"]}>
            <button className={styles["close_btn"]} onClick={changeShow}>
              Close
            </button>
            <Filter />
            <Price />
            <Brands />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
