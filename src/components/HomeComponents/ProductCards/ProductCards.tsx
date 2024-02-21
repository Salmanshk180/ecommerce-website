import { Fragment } from "react";
import styles from "./ProductCards.module.css";
import CardRow from "./CardRow";
const ProductCards = () => {
  return (
    <Fragment>
      <div className={styles.product_cards}>
        <div className={styles.container}>
            <div className={styles.description}>
                <h6 className={styles.title_1}>Feature Products</h6>
                <h6 className={styles.title_2}>BESTSELLER PRODUCTS</h6>
                <h6 className={styles.title_3}>Problems trying to resolve the conflict between</h6>
            </div>
          <CardRow />
          <button className={styles.load_button}>LOAD MORE PRODUCTS</button>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCards;
