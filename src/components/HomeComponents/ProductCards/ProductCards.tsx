import { Fragment, useEffect } from "react";
import styles from "./ProductCards.module.css";
import CardRow from "./CardRow";
import useBreakpoint from "../../../utils/BreakPoints/useBreakpoints";
import { useSelector } from "react-redux";

const ProductCards = () => {
  const breakpoint = useBreakpoint();
  const productData = useSelector((state: any) => state.product); 

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
          <CardRow initialState={productData[0].initialState} width={75} numberOfRows={numberOfCards}/>
          <button className={styles.load_button}>LOAD MORE PRODUCTS</button>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCards;
