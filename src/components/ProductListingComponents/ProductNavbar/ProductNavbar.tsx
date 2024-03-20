import { Fragment } from "react";
import styles from "./ProductNavbar.module.css";
import Path from "../../ShoppingCartComponents/Path";
const ProductNavbar = () => {
  return (
    <Fragment>
      <div className={styles.product_navbar}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <p>Shop</p>
          </div>
          <div className={styles.path}>
            {/* <p className={styles.previous_path}><NavLink to={"/"}>Home</NavLink></p>
            <img src={GraterThan} alt="" />
            <p className={styles.current_path}>Shop</p> */}
            <Path currentPath={"Shop"}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductNavbar;
