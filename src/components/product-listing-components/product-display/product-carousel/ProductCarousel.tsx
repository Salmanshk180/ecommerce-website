import { Fragment } from "react";
import styles from "./ProductCarousel.module.css";
import Card from "../../../home-components/product-cards/Card";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

interface ObjectProps {
  id: string;
  src: string;
  title: string;
  description: string;
  price: number;
  original_price: number;
  showColors: boolean;
}
interface Props {
  min: number;
  max: number;
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
        {props.data.length === 0 ? (
          <h1
            style={{ marginBlock: "200px", textAlign: "center", width: "100%" }}
          >
            No Data Found
          </h1>
        ) : (
          props.data.slice(props.min, props.max).map((data: any) => (
            <div  key={data.id} onClick={() => handleNavigate(data.id)}>
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
            // <CardRow initialState={data} width={100} numberOfRows={10} />
          ))
        )}
      </div>
    </Fragment>
  );
};

export default ProductCarousel;
