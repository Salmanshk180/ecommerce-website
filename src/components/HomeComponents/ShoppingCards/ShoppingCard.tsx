import { Fragment } from "react";
import styles from "./ShoppingCard.module.css";
import {
  shopping_card_1,
  shopping_card_2,
  shopping_card_3,
} from "../../../assets/images";
const ShoppingCard = () => {
  return (
    <Fragment>
      <div className={styles.ShoppingCard}>
        <div className={styles.container}>
          <div className={styles.product_container_1}>
            <div className={styles.product_1}>
              <img src={shopping_card_1} alt="" />
              <div className={styles.product_description}>
                <div>
                  <h6 className={styles.title}>The Product Of The Week</h6>
                  <button className={styles.desc_button}>Explore More</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.product_container_2}>
            <div className={styles.product_2}>
              <img src={shopping_card_2} alt="" />
              <div className={styles.product_description}>
                <div>
                  <h6 className={styles.title}>The Product Of The Week</h6>
                  <button className={styles.desc_button}>Explore More</button>
                </div>
              </div>
            </div>
            <div className={styles.product_3}>
              <img src={shopping_card_3} alt="" />
              <div className={styles.product_description}>
                <div>
                  <h6 className={styles.title}>The Product Of The Week</h6>
                  <button className={styles.desc_button}>Explore More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ShoppingCard;
