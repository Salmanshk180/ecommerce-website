// Brands.tsx
import { Fragment } from "react";
import styles from "./Brands.module.css";
import CheckBox from "./CheckBox";
import useBreakpoint from "../../../../hooks/breakpoint/useBreakpoints";
import { useDispatch } from "react-redux";
import {
  filterAll,
  filterByBrand,
} from "../../../../redux/slices/filter-products/filterProducts";
import { AppDispatch } from "../../../../redux/store/Store";

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
