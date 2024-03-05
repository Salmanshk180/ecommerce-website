import React from "react";
import styles from "./ProductDetail.module.css";
import Path from "../../components/ShoppingCartComponents/Path";
import Clients from "../../components/HomeComponents/clients/Clients";
import ProductCarousel from "../../components/ProductListingComponents/ProductDisplay/ProductCarousel/ProductCarousel";
import p1 from "../../assets/product-cover-5 (8).svg";
import p2 from "../../assets/product-cover-5 (8).svg";
import p3 from "../../assets/product-cover-5 (8).svg";
import p4 from "../../assets/product-cover-5 (8).svg";
import p5 from "../../assets/product-cover-5 (8).svg";
import Carousel from "../../components/ProductDetailComponents/Carousel/Carousel";
import DetailComponent from "../../components/ProductDetailComponents/DetailComponent/DetailComponent";
import DescriptionComponent from "../../components/ProductDetailComponents/DescriptionComponent/DescriptionComponent";
const CarouselData = [
  {
    initialState: [
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
    ],
  },
  {
    initialState: [
      {
        src: p5,
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
        src: p3,
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
        src: p1,
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
        src: p4,
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
        src: p2,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: false,
      },
      {
        src: p1,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: false,
      },
    ],
  },
];
const ProductDetail = () => {
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
        <ProductCarousel data={CarouselData} min={0} max={1} />
        <Clients />
      </div>
    </React.Fragment>
  );
};

export default ProductDetail;
