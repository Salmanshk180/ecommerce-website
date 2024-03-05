import React from "react";
import styles from "./ShoppingCart.module.css";
import Header from "../../components/HomeComponents/Header/Header";
import Footer from "../../components/HomeComponents/Footer/Footer";
import Path from "../../components/ShoppingCartComponents/Path";
import Bar from "../../components/ShoppingCartComponents/Bar";
import Card from "../../components/ShoppingCartComponents/Card";
import TotalCart from "../../components/ShoppingCartComponents/TotalCart";
const ShoppingCart = () => {
  return (
    <React.Fragment>
      <div className={styles["shopping_cart"]}>
        <div className={styles["container"]}>
          <Path currentPath="Cart" />
        </div>
        <div className={styles["main_container"]}>
          <div className={styles["first_container"]}>
            <Bar />
            <Card />
            <Card />
          </div>
          <div className={styles["second_container"]}>
            <TotalCart />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShoppingCart;
