import { Fragment } from "react";
import styles from "./ProductCarousel.module.css";
import CardRow from "../../../HomeComponents/ProductCards/CardRow";
import p1 from "../../../../assets/product-1.svg";
import p2 from "../../../../assets/product-2.svg";
import p3 from "../../../../assets/product-3.svg";
import p4 from "../../../../assets/product-4.svg";
import p5 from "../../../../assets/product-5.svg";
const initialState = [
  {
    src: p1,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    original_price: 16.48,
    showColors: true,

  },
  {
    src: p2,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    original_price: 16.48,
    showColors: true,

  },
  {
    src: p3,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    original_price: 16.48,
    showColors: true,

  },
  {
    src: p3,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    original_price: 16.48,
    showColors: true,

  },
  {
    src: p3,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    original_price: 16.48,
    showColors: true,

  },
  {
    src: p3,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    original_price: 16.48,
    showColors: true,

  },
 

];
const ProductCarousel = () => {
  return (
    <Fragment>
      <div className={styles.product_carousel}>
        <CardRow initialState={initialState} />
      </div>
    </Fragment>
  );
};

export default ProductCarousel;
