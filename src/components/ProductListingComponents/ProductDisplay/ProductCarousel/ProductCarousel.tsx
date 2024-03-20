import { Fragment } from "react";
import styles from "./ProductCarousel.module.css";
import Card from "../../../HomeComponents/ProductCards/Card";
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
  data: ObjectProps[];
}
const ProductCarousel = (props: Props) => {
  const navigate = useNavigate();
  const handleNavigate = (id: string) => {
    navigate(`/products/${id}`);
  };
  return (
    <Fragment>
      <div className={styles.product_carousel}>
        {props.data.length == 0 ? (
          <h1
            style={{ marginBlock: "200px", textAlign: "center", width: "100%" }}
          >
            No Data Found
          </h1>
        ) : (
          props.data.slice(props.min, props.max).map((data) => (
            <div onClick={() => handleNavigate(data.id)}>
              <Card
                id={nanoid()}
                src={data.src}
                title={data.title}
                description={data.description}
                price={data.price}
                original_price={data.original_price}
                show_colors={data.showColors}
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
