import { Fragment, useEffect, useState } from "react";
import ProductDisplayNavbar from "./product-display-navbar/ProductDisplayNavbar";
import styles from "./ProductDisplay.module.css";
import ProductCarousel from "./product-carousel/ProductCarousel";
import Pagination from "../pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store/Store";
import { fetchProducts } from "../../../redux/slices/product-data/productData";
import { FadeLoader } from "react-spinners";
import { fetchFilterdProducts } from "../../../redux/slices/filters/filters.slices";

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
}

const ProductDisplay = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector((state: RootState) => state.filters.filter);
  const loadingProducts = useSelector(
    (state: RootState) => state.product.isLoading
  );
  const products = useSelector((state: RootState) => state.product.data);
  useEffect(() => {
    if (filters.maxprice === 0 && filters.minprice === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, filters]);

  useEffect(() => {
    if (filters.maxprice !== 0 && filters.minprice !== 0) {
      dispatch(fetchFilterdProducts(filters));
    }
  }, [dispatch, filters]);

  return (
    <Fragment>
      <div className={styles.product_display}>
        <ProductDisplayNavbar show={props.show} setShow={props.setShow} />
        <div className={styles.content}>
          {loadingProducts || products.products === undefined ? (
            <FadeLoader
              style={{
                position: "relative",
                left: "0%",
                top: "50%",
                transform: "translate(50%, -50%)",
                width:"100%",
                height:"230px"
              }}
            />
          ) : products?.products?.length === 0 ? (
            <h1
              style={{
                marginBlock: "200px",
                textAlign: "center",
                width: "100%",
                height: "230px",
              }}
            >
              No Data Found
            </h1>
          ) : (
            <div className={styles.carousel}>
              <ProductCarousel data={products.products} />
              <Pagination numberOfCarousel={products.products?.length / 10} />
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDisplay;
