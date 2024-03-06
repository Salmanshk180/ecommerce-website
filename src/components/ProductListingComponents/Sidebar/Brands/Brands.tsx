// Brands.tsx
import { Fragment } from "react";
import styles from "./Brands.module.css";
import CheckBox from "./CheckBox";
import useBreakpoint from "../../../../utils/BreakPoints/useBreakpoints";
import { useDispatch, useSelector } from "react-redux";
import { selectBrand } from "../../../../redux/Slices/selectBrands";
import { filterByBrand } from "../../../../redux/Slices/filterProducts";
import { RootState } from "../../../../redux/Store/Store";

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
  const dispatch = useDispatch();
  const selectBrands = useSelector((state:RootState) => state.selectBrand.brands);
  console.log(selectBrands);
  const handleBrand = (text: string) => {
    dispatch(selectBrand({ brand: text })); // Dispatch selectBrand action with the text
    dispatch(filterByBrand({ brands: selectBrands }));
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
