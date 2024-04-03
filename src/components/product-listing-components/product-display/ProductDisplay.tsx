import { Fragment, useEffect, useState } from "react";
import ProductDisplayNavbar from "./product-display-navbar/ProductDisplayNavbar";
import styles from "./ProductDisplay.module.css";
import ProductCarousel from "./product-carousel/ProductCarousel";
import Pagination from "../pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/Store";
import { filterAll } from "../../../redux/slices/filter-products/filterProducts";

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
}
const ProductDisplay = (props: Props) => {
  const [sliceMin, setSliceMin] = useState<number>(0);
  const [sliceMax, setSliceMax] = useState<number>(12);
  const filterData = useSelector(
    (state: RootState) => state.filterProducts.filteredProducts
  );
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterAll());
  }, [dispatch]);

  return (
    <Fragment>
      <div className={styles.product_display}>
        <div className={styles.navbar}>
          <ProductDisplayNavbar show={props.show} setShow={props.setShow} />
        </div>
        <div className={styles.carousel}>
          <ProductCarousel data={filterData} min={sliceMin} max={sliceMax} />
          <Pagination
            numberOfCarousel={filterData.length / 10}
            setSliceMin={setSliceMin}
            setSliceMax={setSliceMax}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDisplay;