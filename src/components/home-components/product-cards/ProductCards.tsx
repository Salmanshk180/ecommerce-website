import { Fragment, useEffect, useState } from "react";
import styles from "./ProductCards.module.css";
import Card from "./Card";
import useBreakpoint from "../../../hooks/breakpoint/useBreakpoints";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../../redux/store/Store";
import { fetchProducts } from "../../../redux/slices/product-data/productData";
import { fetchFilterdProducts } from "../../../redux/slices/filters/filters.slices";
interface ObjectProps {
  src: string;
  title: string;
  description: string;
  price: number;
  original_price: number;
  showColors: boolean;
}

const ProductCards = () => {
  const breakpoint = useBreakpoint();
  const productData = useSelector((state: RootState) => state.product.data.products);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  let numberOfCards = 10;
  if (breakpoint === "xs") {
    numberOfCards = 5;
  }
 const filters = useSelector((state:RootState) => state.filters.filter)
  useEffect(() => {
    dispatch(fetchFilterdProducts(filters));
  }, [dispatch]);  
  return (
    <Fragment>
      <div className={styles.product_cards}>
        <div className={styles.container}>
          <div className={styles.description}>
            <h6 className={styles.title_1}>Feature Products</h6>
            <h6 className={styles.title_2}>BESTSELLER PRODUCTS</h6>
            <h6 className={styles.title_3}>
              Problems trying to resolve the conflict between
            </h6>
          </div>
          <div className={styles["card-container"]}>
            {productData?.slice(0,10).map((data: any) => (
              <Card
                key={data.id}
                src={data.images.src}
                title={data.product.name}
                description={data.description}
                price={data.discount_price}
                original_price={data.price}
                show_colors={data.color}
              />
            ))}
          </div>

          <button
            className={styles.load_button}
            onClick={() => navigate("/products")}
          >
            LOAD MORE PRODUCTS
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCards;
