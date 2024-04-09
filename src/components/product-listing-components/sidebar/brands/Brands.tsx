// Brands.tsx
import { Fragment, useEffect } from "react";
import styles from "./Brands.module.css";
import CheckBox from "./CheckBox";
import useBreakpoint from "../../../../hooks/breakpoint/useBreakpoints";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store/Store";
import {
  addBrand,
  removeBrand,
} from "../../../../redux/slices/filters/filters.slices";

const Brands = () => {
  const breakpoint = useBreakpoint();
  const initialState = [
    { text: "All" },
    { text: "Zara" },
    { text: "Levi's" },
    { text: "Adidas" },
    { text: "Peter England" },
    { text: "Allen Solly" },
    { text: "Fabindia" },
  ];
  const dispatch = useDispatch<AppDispatch>();
  const brands = useSelector((state: RootState) => state.filters.selectedBrands);
  const handleBrand = async (text: string) => {
    if (brands?.includes(text.toLowerCase())) {
      dispatch(removeBrand({ brand: text.toLowerCase() }));
    } else {
      dispatch(addBrand({ brand: text.toLowerCase() }));
    }
  };
  return (
    <Fragment>
      <div className={styles.brands}>
        <div className={styles.container}>
          {breakpoint === "xs" ? "" : <p className={styles.title}>Brands</p>}
          {initialState.map((state) => (
            <CheckBox
              key={state.text}
              text={state.text}
              handleBrand={handleBrand}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Brands;
