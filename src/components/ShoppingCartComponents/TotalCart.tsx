import React from "react";
import styles from "./TotalCart.module.css";
const TotalCart = () => {
  return (
    <React.Fragment>
      <div className={styles["total_cart"]}>
        <p className={styles["title"]}>Cart Total</p>
        <div className={styles["list"]}>
          <p>Shopping:</p>
          <p>$300</p>
        </div>
        <hr />
        <div className={styles["list"]}>
          <p>Shipping:</p>
          <p>Free</p>
        </div>
        <hr />
        <div className={styles["list"]}>
          <p>Total:</p>
          <p>$300</p>
        </div>
        <button className={styles["checkout_btn"]}>Checkout</button>
      </div>
    </React.Fragment>
  );
};

export default TotalCart;
