// Brands.tsx
import { Fragment, useEffect } from "react";
import styles from "./Brands.module.css";
import CheckBox from "./CheckBox";
import useBreakpoint from "../../../../hooks/breakpoint/useBreakpoints";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store/Store";
import {
  addBrand,
  changePage,
  removeBrand,
} from "../../../../redux/slices/filters/filters.slices";
import { fetchBrands } from "../../../../redux/slices/filter-data/filterData";

const Brands = () => {
  const breakpoint = useBreakpoint();
  const dispatch = useDispatch<AppDispatch>();
  const brands = useSelector(
    (state: RootState) => state.filters.selectedBrands
  );
  const handleBrand = async (text: string) => {
    if (brands?.includes(text.toLowerCase())) {
      dispatch(removeBrand({ brand: text.toLowerCase() }));
    } else {
      dispatch(addBrand({ brand: text.toLowerCase() }));
    }
  };
  useEffect(() => {
    dispatch(fetchBrands());
  }, []);
  const allBrands = useSelector(
    (state: RootState) => state.brandAndCategory.data.brands
  );

  useEffect(() => {
    if (brands?.length === 0) {
      dispatch(addBrand({ brand: "all" }));
      dispatch(changePage({ page: 1 }));
    }
  }, [brands?.length]);

  return (
    <Fragment>
      <div className={styles.brands}>
        <div className={styles.container}>
          {breakpoint === "xs" ? "" : <p className={styles.title}>Brands</p>}
          <CheckBox
            key={"all"}
            text={"all".toUpperCase()}
            handleBrand={handleBrand}
          />
          {allBrands?.map((state) => (
            <CheckBox
              key={state.name}
              text={state.name.toUpperCase()}
              handleBrand={handleBrand}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Brands;
