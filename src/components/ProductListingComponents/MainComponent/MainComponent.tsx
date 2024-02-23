import { Fragment } from "react";
import styles from "./MainComponent.module.css";
import Sidebar from "../Sidebar/Sidebar";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import Pagination from "../Pagination/Pagination";

const MainComponent = () => {
  return (
    <Fragment>
      <div className={styles.main_component}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.product_display}>
          <ProductDisplay />
          <Pagination />
        </div>
      </div>
    </Fragment>
  );
};

export default MainComponent;
