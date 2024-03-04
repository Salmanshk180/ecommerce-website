import React from "react";
import styles from "./Bar.module.css";
const Bar = () => {
  return (
    <React.Fragment>
      <div className={styles["bar"]}>
        <div className={styles['first_part']}>
          <p>Product</p>
        </div>
        <div className={styles['second_part']}>
          <p>Sub Total</p>
          <p>Quantity</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Bar;
