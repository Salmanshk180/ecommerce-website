import { Fragment, useState } from "react";
import styles from "./MainComponent.module.css";
import Sidebar from "../Sidebar/Sidebar";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import Pagination from "../Pagination/Pagination";

const MainComponent = () => {
  const [show, setShow] =useState<boolean>(false);
  return (
    <Fragment>
      <div className={styles.main_component}>
        <div className={styles.sidebar}>
          <Sidebar show={show} setShow={setShow} />
        </div>
        <div className={styles.product_display}>
          <ProductDisplay show={show} setShow={setShow}/>
        </div>
      </div>
    </Fragment>
  );
};

export default MainComponent;
