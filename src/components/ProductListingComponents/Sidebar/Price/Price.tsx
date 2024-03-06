import React, { Fragment, useEffect, useState } from "react";
import styles from "./Price.module.css";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import useBreakpoint from "../../../../utils/BreakPoints/useBreakpoints";
import { useDispatch, useSelector } from "react-redux";
import { filterPrice } from "../../../../redux/Slices/filterProducts";
import { RootState } from "../../../../redux/Store/Store";
const Price = () => {
  const [value, setValue] = useState([10, 500]);
  const breakpoint = useBreakpoint();
  const dispatch = useDispatch();
  const filterData = useSelector(
    (state: RootState) => state.filterProducts.filteredProducts
  );

  // useEffect(() => {
  //   const minPriceProduct = filterData.reduce((minProduct, currentProduct) => {
      
  //       });
  //   console.log(minPriceProduct);
    
  //   dispatch(filterPrice({ min: value[0], max: value[1] }));
  // }, [value]);
  return (
    <Fragment>
      {breakpoint === "xs" ? "" : <p className={styles["price_text"]}>Price</p>}
      <div className={styles["range-slider-container"]}>
        <RangeSlider min={0} max={1000} value={value} onInput={setValue} />
        <div className={styles["value_container"]}>
          <p>${value[0]}</p>
          <p>${value[1]}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Price;
