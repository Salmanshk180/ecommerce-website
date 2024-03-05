import React, { Fragment, useState } from "react";
import styles from "./Price.module.css";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
const Price = () => {
  const [value, setValue] = useState([10, 500]);

  return (
    <Fragment>
      <p className={styles["price_text"]}>Price</p>
      <div className={styles["range-slider-container"]}>
        <RangeSlider min={0} max={1000} value={value} onInput={setValue} />
        <div className={styles['value_container']}>
        <p>${value[0]}</p>
        <p>${value[1]}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Price;
