import React from "react";
import styles from "./Card.module.css";
import mac from "../../assets/images.jpg";

const Card = () => {
  return (
    <React.Fragment>
      <div className={styles["cart_card"]}>
        <div className={styles["card_container"]}>
          <img src={mac} alt="" />
          <div className={styles["card_desc"]}>
            <div className={styles["inside_container"]}>
              <p>Macbook Pro 15</p>
              <p className={styles['color_container']}>Color: 
                <div className={styles['color']}></div>
              </p>
              <p>Price: $100</p>
            </div>
            <p>$200</p>
            <input type="number" name="" id="" defaultValue={1} className={styles['quantity_input']}/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
