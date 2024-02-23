import { Fragment, useState, useRef } from "react";
import styles from "./Sidebar.module.css";
import Filter from "./Filter/Filter";
import Price from "./Price/Price";
import Brands from "./Brands/Brands";
const Sidebar = () => {
  const [show, setShow] = useState<boolean>(false);
  const changeShow = () => {
    setShow(!show);
  };
  return (
    <Fragment>
      <div className={styles.sidebar}>
        <div
          className={`${styles["container"]} ${show ? styles["active"] : styles["inactive"]}`}
        >
          <p className={styles.title}>Filter By</p>
            <div className={styles.line}></div>
          <div className={styles["components"]}>
            <Filter />
            <Price />
            <Brands />
          </div>
        </div>
        <button className={styles.toggle_btn} onClick={changeShow}>
          Filter By
        </button>
      </div>
    </Fragment>
  );
};

export default Sidebar;
