import React, { Fragment, useEffect } from "react";
import styles from "./ProductDisplayNavbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { sortBy } from "../../../../redux/slices/filters/filters.slices";
import { RootState } from "../../../../redux/store/Store";
interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
}

const ProductDisplayNavbar = (props: Props) => {
  const dispatch = useDispatch();
  const sortbyprice = useSelector((state:RootState)=>state.filters.filter.sortby)
  const selected = useSelector(
    (state: RootState) => state.filters.filter.category
  );
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "pricelowtohigh") {
      dispatch(sortBy({ sortby: "asc" }));
    }

    if (event.target.value === "pricehightolow") {
      dispatch(sortBy({ sortby: "desc" }));
    }
  };

  useEffect(() => {}, []);
  return (
    <Fragment>
      <div className={styles.navbar}>
        <div className={styles.description}>
          <p className={styles.heading}>{selected?.toUpperCase()}</p>
          <p className={styles.subheading}>Seo text will be here</p>
        </div>
        <div className={styles.sort_container}>
          <p className={styles.sort_text}>Sort By</p>
          <button
            className={styles.filter_btn}
            onClick={() => props.setShow(!props.show)}
          >
            Filter By
          </button>
          <select
            name="sort"
            id="sort"
            defaultValue={sortbyprice=="asc" ? "pricelowtohigh" : "pricehightolow"}
            onChange={(event) => handleChange(event)}
          >
            <option value="pricelowtohigh">
              Price: Low to High
            </option>
            <option value="pricehightolow">Price: High to Low</option>
          </select>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDisplayNavbar;
