import React from "react";
import styles from "./Testimonial.module.css";
import image from "../../../assets/unsplash_vjMgqUkS8q8.svg";
const Testimonial = () => {
  return (
    <React.Fragment>
      <div className={styles["testimonial"]}>
        <div className={styles["container"]}>
          <div className={styles["text_container"]}>
            <div>
              <p className={styles["para-1"]}>WORK WITH US</p>
              <p className={styles["para-2"]}>Now Let's grow Yours</p>
              <p className={styles["para-3"]}>
                The gradual accumulation of information about atomic and
                small-scale behavior during the first quarter of the 20th{" "}
              </p>
              <button className={styles['test_btn']}>Button</button>
            </div>
          </div>
          <div className={styles["img_container"]}>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Testimonial;
