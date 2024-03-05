import React from "react";
import styles from "./DetailComponent.module.css";
import fullStar from "../../../assets/Vector (14).svg";
import Color from "../../HomeComponents/FeatureBlogs/Color/Color";
import like from "../../../assets/Vector (16).svg";
import cart from "../../../assets/Vector (17).svg";
import eye from "../../../assets/Vector (15).svg";
const DetailComponent = () => {
  return (
    <React.Fragment>
      <div className={styles["detail-component"]}>
        <p className={styles['floating_para']}>Floating Phone</p>
        <div className={styles["review_container"]}>
          <img src={fullStar} alt="" />
          <img src={fullStar} alt="" />
          <img src={fullStar} alt="" />
          <img src={fullStar} alt="" />
          <img src={fullStar} alt="" />
          <span>10 Reviews</span>
        </div>
        <div className={styles['price_container']}>$1,139.33</div>
        <div className={styles['availability_container']}>Availability: <span>In Stock</span></div>
        <div className={styles['description_container']}>
          <p>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <hr />
        </div>
        <div className={styles["color_container"]}>
          <Color classname="first_color" />
          <Color classname="second_color" />
          <Color classname="third_color" />
          <Color classname="fourth_color" />
        </div>
        <div className={styles['button_container']}>
          <button>Select Option</button>
          <img src={like} alt="" />
          <img src={cart} alt="" />
          <img src={eye} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default DetailComponent;
