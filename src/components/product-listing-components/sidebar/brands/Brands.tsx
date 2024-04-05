// Brands.tsx
import { Fragment, useEffect } from "react";
import styles from "./Brands.module.css";
import CheckBox from "./CheckBox";
import useBreakpoint from "../../../../hooks/breakpoint/useBreakpoints";
import { useDispatch, useSelector } from "react-redux";
import {
  filterAll,
  filterByBrand,
} from "../../../../redux/slices/filter-products/filterProducts";
import { AppDispatch, RootState } from "../../../../redux/store/Store";
import { fetchProducts } from "../../../../redux/slices/product-data/productData";
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
  // const [brands, setBrands] = useState<string[]>([]);
  const filters = useSelector((state: RootState) => state.filters.filter);
  const handleBrand = async (text: string) => {
    if (filters.brands?.includes(text.toLowerCase())) {
      dispatch(removeBrand({ brand: text.toLowerCase() }));
    } else {
      dispatch(addBrand({ brand: text.toLowerCase() }));
    }
    dispatch(fetchProducts(filters));
  };

  useEffect(() => {
    dispatch(fetchProducts(filters));
  }, [dispatch]);
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
