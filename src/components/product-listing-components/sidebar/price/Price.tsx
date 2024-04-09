import { Fragment, useEffect, useState } from "react";
import styles from "./Price.module.css";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import useBreakpoint from "../../../../hooks/breakpoint/useBreakpoints";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import { AppDispatch, RootState } from "../../../../redux/store/Store";
import {
  addmaxPrice,
  addminPrice,
  changePage,
} from "../../../../redux/slices/filters/filters.slices";

const Price = () => {
  const breakpoint = useBreakpoint();
  const dispatch = useDispatch<AppDispatch>();  
  const min = useSelector(
    (state: RootState) => state.product.data.minimum_price
  );
  const max = useSelector(
    (state: RootState) => state.product.data.maximum_price
  );

  const [value, setValue] = useState([0, 0]); // Initial value set to [0, 0]
  useEffect(() => {
      setValue([min, max]);
  }, [min, max]);
  const debouncedFetchProducts = debounce((value) => {
    dispatch(addminPrice(value[0]));
    dispatch(addmaxPrice(value[1]));
    dispatch(changePage({ page: 1 }));
  }, 2000);
  useEffect(() => {
    debouncedFetchProducts(value);
    return () => debouncedFetchProducts.cancel();
  }, [value]);

  return (
    <Fragment>
      {breakpoint === "xs" ? "" : <p className={styles["price_text"]}>Price</p>}
      <div className={styles["range-slider-container"]}>
        <RangeSlider
          min={min || 0}
          max={max || 100} 
          value={value}
          onInput={(val:number[])=>{
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
