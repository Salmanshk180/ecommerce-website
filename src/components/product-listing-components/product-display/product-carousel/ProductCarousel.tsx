import { Fragment } from "react";
import styles from "./ProductCarousel.module.css";
import Card from "../../../home-components/product-cards/Card";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOneProduct,
} from "../../../../redux/slices/get-one-product/getOneProduct";
import { AppDispatch, RootState } from "../../../../redux/store/Store";
interface Props {
  data: any;
}
const ProductCarousel = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const handleNavigate = (
    id: string,
    color: string,
    size: string,
    productid: string
  ) => {
    dispatch(
      fetchOneProduct({ color: color!, size: size, productid: productid })
    );
    navigate(`/products/${id}`);
  };
  return (
    <Fragment>
      <div className={styles.product_carousel}>
        {props.data?.map((data: any) => (
          <div
            key={data.id}
            onClick={() => {
              handleNavigate(data.product.id, data.color, data.size, data.product.id);
            }}
          >
            <Card
              id={nanoid()}
              src={data.images[0]}
              title={data.product.name}
              description={data.description}
              price={data.discount_price}
              original_price={data.price}
              show_colors={data.color}
              product={data.product}
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductCarousel;
