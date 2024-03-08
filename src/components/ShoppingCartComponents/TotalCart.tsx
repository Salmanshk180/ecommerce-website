import React, { useEffect } from "react";
import styles from "./TotalCart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store/Store";
import { onCheckout } from "../../redux/Slices/cartProducts";

const TotalCart = () => {
  const productData = useSelector(
    (state: RootState) => state.cartProducts.cartProducts
  );
  const dispatch = useDispatch();
  const shoppingPrice = productData.reduce((total, product) => {
    return total + product.subtotal; // Assuming subtotal is the total price of each product
  }, 0);

  const shippingPrice = "Free";
  const total = shoppingPrice + shippingPrice === "Free" ? 0 : shoppingPrice;
  return (
    <div className={styles["total_cart"]}>
      <p className={styles["title"]}>Cart Total</p>
      <div className={styles["list"]}>
        <p>Shopping:</p>
        <p style={{ fontWeight: "700" }}>${shoppingPrice.toFixed(2)}</p>
      </div>
      <hr />
      <div className={styles["list"]}>
        <p>Shipping:</p>
        <p style={{ fontWeight: "700" }}>{shippingPrice}</p>
      </div>
      <hr />
      <div className={styles["list"]}>
        <p>Total:</p>
        <p style={{ fontWeight: "700" }}>${total.toFixed(2)}</p>
      </div>
      <button
        className={styles["checkout_btn"]}
        onClick={() => {
          console.log("Checkout");
          dispatch(onCheckout());
        }}
      >
        Checkout
      </button>
    </div>
  );
};

export default TotalCart;
