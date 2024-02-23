import { Fragment } from "react";
import styles from "./ProductCards.module.css";
import CardRow from "./CardRow";
import p1 from "../../../assets/product-1.svg";
import p2 from "../../../assets/product-2.svg";
import p3 from "../../../assets/product-3.svg";
import p4 from "../../../assets/product-4.svg";
import p5 from "../../../assets/product-5.svg";
import useBreakpoint from "../../../utils/BreakPoints/useBreakpoints";
const initialState = [
  {
    src: p1,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    original_price: 16.48,
    showColors: false,
  },
  {
    src: p2,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    original_price: 16.48,
    showColors: false,
  },
  {
    src: p3,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    original_price: 16.48,
    showColors: false,
  },
  {
    src: p4,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    original_price: 16.48,
    showColors: false,
  },
  {
    src: p5,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    original_price: 16.48,
    showColors: false,
  },
  {
    src: p5,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    original_price: 16.48,
    showColors: false,
  },
  {
    src: p5,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    original_price: 16.48,
    showColors: false,
  },
  {
    src: p5,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    original_price: 16.48,
    showColors: false,
  },
  {
    src: p5,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    original_price: 16.48,
    showColors: false,
  },
  {
    src: p5,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    original_price: 16.48,
    showColors: false,
  },
];
const ProductCards = () => {
  const breakpoint = useBreakpoint();
  let numberOfCards = 10;
  if (breakpoint === "xs") {
    numberOfCards = 5;
  }
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
          <CardRow initialState={initialState} width={75} numberOfRows={numberOfCards}/>
          <button className={styles.load_button}>LOAD MORE PRODUCTS</button>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCards;
