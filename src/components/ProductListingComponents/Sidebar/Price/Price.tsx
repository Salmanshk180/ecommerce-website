import React, { Fragment, useEffect, useState } from "react";
import styles from "./Price.module.css";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import useBreakpoint from "../../../../utils/BreakPoints/useBreakpoints";
import { useDispatch, useSelector } from "react-redux";
import {
  filterAll,
  filterPrice,
} from "../../../../redux/Slices/filterProducts";
import { AppDispatch, RootState } from "../../../../redux/Store/Store";
import { initialState } from "../../../../redux/Slices/productData";

const Price = () => {
  const breakpoint = useBreakpoint();
  const dispatch = useDispatch<AppDispatch>();
  // const filterData = useSelector(
  //   (state: RootState) => state.filterProducts.filteredProducts
  // );
  const filterData = initialState;
  const minOriginalPrice = filterData.reduce(
    (min, product) => Math.min(min, product.original_price),
    Infinity
  );
  const maxOriginalPrice = filterData.reduce(
    (max, product) => Math.max(max, product.original_price),
    0
  );
  const [value, setValue] = useState([minOriginalPrice, maxOriginalPrice]);

  useEffect(() => {
    setValue([minOriginalPrice, maxOriginalPrice]);
  }, [filterData, minOriginalPrice, maxOriginalPrice]);

  return (
    <Fragment>
      {breakpoint === "xs" ? "" : <p className={styles["price_text"]}>Price</p>}
      <div className={styles["range-slider-container"]}>
        <RangeSlider
          min={minOriginalPrice}
          max={maxOriginalPrice}
          value={value}
          onInput={async (val: any) => {
            await dispatch(filterPrice({ min: val[0], max: val[1] }));
            await dispatch(filterAll());
            setValue(val);
          }}
        />
        <div className={styles["value_container"]}>
          <p>{value[0]}</p>
          <p>{value[1]}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Price;
