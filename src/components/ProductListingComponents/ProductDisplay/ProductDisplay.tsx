import { Fragment } from "react";
import ProductDisplayNavbar from "./ProductDisplayNavbar/ProductDisplayNavbar";
import styles from "./ProductDisplay.module.css";
import ProductCarousel from "./ProductCarousel/ProductCarousel";
const ProductDisplay = () => {
  return (
    <Fragment>
      <div className={styles.product_display}>
        <div className={styles.navbar}>
        <ProductDisplayNavbar />
        </div>
        <div className={styles.carousel}>
        <ProductCarousel />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDisplay;
