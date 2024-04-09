import { Fragment } from "react";
import styles from "./ProductCarousel.module.css";
import Card from "../../../home-components/product-cards/Card";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
interface Props {
  data: any;
}
const ProductCarousel = (props: Props) => {
  const navigate = useNavigate();
  const handleNavigate = (id: string) => {
    navigate(`/products/${id}`);
  };
  return (
    <Fragment>
      <div className={styles.product_carousel}>
        {props.data?.map((data: any) => (
          <div key={data.id} onClick={() => handleNavigate(data.id)}>
            <Card
              id={nanoid()}
              src={data.images.src}
              title={data.product.name}
              description={data.description}
              price={data.discount_price}
              original_price={data.price}
              show_colors={data.color}
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductCarousel;
