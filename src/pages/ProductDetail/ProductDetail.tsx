import React from "react";
import styles from "./ProductDetail.module.css";
import Path from "../../components/ShoppingCartComponents/Path";
import Clients from "../../components/HomeComponents/clients/Clients";
import Carousel from "../../components/ProductDetailComponents/Carousel/Carousel";
import DetailComponent from "../../components/ProductDetailComponents/DetailComponent/DetailComponent";
import DescriptionComponent from "../../components/ProductDetailComponents/DescriptionComponent/DescriptionComponent";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const {id} = useParams();
  console.log(id);
  
  return (
    <React.Fragment>
      <div className={styles["product-detail"]}>
        <Path currentPath="Shop" />
        <div className={styles["container"]}>
          <div className={styles["first_container"]}>
            <div className={styles["carousel_component"]}>
              <Carousel />
            </div>
            <div className={styles["detail_component"]}>
              <DetailComponent />
            </div>
          </div>
        </div>
        <DescriptionComponent />
        <Clients />
      </div>
    </React.Fragment>
  );
};

export default ProductDetail;
