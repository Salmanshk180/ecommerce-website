import { Fragment } from "react";
import styles from "./ShoppingCard.module.css";
import p1 from "../../assets/p1.svg";
import p2 from "../../assets/unsplash_Bd7gNnWJBkU (1).svg";
import p3 from "../../assets/p31.svg";
const ShoppingCard = () => {
  return (
    <Fragment>
      <div className={styles.ShoppingCard}>
        <div className={styles.container}>
          <div className={styles.product_container_1}>
            <div className={styles.product_1}>
              <img src={p1} alt="" />
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
              <img src={p2} alt="" />
              <div className={styles.product_description}>
                <div>
                  <h6 className={styles.title}>The Product Of The Week</h6>
                  <button className={styles.desc_button}>Explore More</button>
                </div>
              </div>
            </div>
            <div className={styles.product_3}>
              <img src={p3} alt="" />
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
