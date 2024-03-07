import { Fragment, useEffect, useState } from "react";
import ProductDisplayNavbar from "./ProductDisplayNavbar/ProductDisplayNavbar";
import styles from "./ProductDisplay.module.css";
import ProductCarousel from "./ProductCarousel/ProductCarousel";
import Pagination from "../Pagination/Pagination";
import p1 from "../../../assets/product-1.svg";
import p2 from "../../../assets/product-2.svg";
import p3 from "../../../assets/product-3.svg";
import p4 from "../../../assets/product-4.svg";
import p5 from "../../../assets/product-5.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/Store/Store";
import { filterAll } from "../../../redux/Slices/filterProducts";

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

  console.log(filterData);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterAll());
  }, []);

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
