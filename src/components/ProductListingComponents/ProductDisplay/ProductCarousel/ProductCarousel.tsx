import { Fragment } from "react";
import styles from "./ProductCarousel.module.css";
import CardRow from "../../../HomeComponents/ProductCards/CardRow";
import Card from "../../../HomeComponents/ProductCards/Card";
import { nanoid } from "@reduxjs/toolkit";

interface ObjectProps {
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
  return (
    <Fragment>
      <div className={styles.product_carousel}>
        {props.data.length == 0 ? (
          <h1 style={{marginBlock:"200px", textAlign:"center", width:"100%"}}>No Data Found</h1>
        ) : (
          props.data.slice(props.min, props.max).map((data) => (
            <Card
              id={nanoid()}
              src={data.src}
              title={data.title}
              description={data.description}
              price={data.price}
              original_price={data.original_price}
              show_colors={data.showColors}
            />
            // <CardRow initialState={data} width={100} numberOfRows={10} />
          ))
        )}
      </div>
    </Fragment>
  );
};

export default ProductCarousel;
