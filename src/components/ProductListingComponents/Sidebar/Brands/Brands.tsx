// Brands.tsx
import { Fragment, useEffect, useState } from "react";
import styles from "./Brands.module.css";
import CheckBox from "./CheckBox";
import useBreakpoint from "../../../../utils/BreakPoints/useBreakpoints";
import { useDispatch, useSelector } from "react-redux";
import {
  filterAll,
  filterByBrand,
} from "../../../../redux/Slices/filterProducts";
import { AppDispatch, RootState } from "../../../../redux/Store/Store";

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
  // const [brands, setBrands] = useState<string[]>([]);
  const handleBrand = (text: string) => {
    dispatch(filterByBrand({ brand: text }));
    dispatch(filterAll());
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
