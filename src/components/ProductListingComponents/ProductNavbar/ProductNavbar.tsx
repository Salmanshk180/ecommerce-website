import { Fragment } from "react";
import styles from "./ProductNavbar.module.css";
import GraterThan from "../../../assets/GreaterThan.svg";
const ProductNavbar = () => {
  return (
    <Fragment>
      <div className={styles.product_navbar}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <p>Shop</p>
          </div>
          <div className={styles.path}>
            <p className={styles.previous_path}>Home</p>
            <img src={GraterThan} alt="" />
            <p className={styles.current_path}>Shop</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductNavbar;
