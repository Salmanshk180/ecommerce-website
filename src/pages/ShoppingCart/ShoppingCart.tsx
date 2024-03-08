import React, { useEffect } from "react";
import styles from "./ShoppingCart.module.css";
import Path from "../../components/ShoppingCartComponents/Path";
import Bar from "../../components/ShoppingCartComponents/Bar";
import Card from "../../components/ShoppingCartComponents/Card";
import TotalCart from "../../components/ShoppingCartComponents/TotalCart";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store/Store";
const ShoppingCart = () => {
  const cartData = useSelector(
    (state: RootState) => state.cartProducts.cartProducts
  );
  return (
    <React.Fragment>
      <div className={styles["shopping_cart"]}>
        <div className={styles["container"]}>
          <Path currentPath="Cart" />
        </div>
        <div className={styles["main_container"]}>
          <div className={styles["first_container"]}>
            <div className={styles["bar_container"]}>
              <Bar />
            </div>
            {cartData.length === 0 ? (
              <h1 style={{ marginTop: "30px" }}>No Products</h1>
            ) : (
              cartData.map((product) => <Card data={product} />)
            )}
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
