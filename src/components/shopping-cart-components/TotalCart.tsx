import styles from "./TotalCart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/Store";
import { closeModal, openModal } from "../../redux/slices/modal/modal";

const TotalCart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector(
    (state: RootState) => state.cartProducts.cartData
  );
  const shoppingTotal = cartData?.reduce(
    (total, cart) => total + cart.subtotal,
    0
  );
  const shippingPrice = 0;
  const totalPrice = shippingPrice + shoppingTotal;
  return (
    <div className={styles["total_cart"]}>
      <p className={styles["title"]}>Cart Total</p>
      <div className={styles["list"]}>
        <p>Shopping:</p>
        <p style={{ fontWeight: "700" }}>${shoppingTotal}</p>
      </div>
      <hr />
      <div className={styles["list"]}>
        <p>Shipping:</p>
        <p style={{ fontWeight: "700" }}>${shippingPrice}</p>
      </div>
      <hr />
      <div className={styles["list"]}>
        <p>Total:</p>
        <p style={{ fontWeight: "700" }}>${totalPrice}</p>
      </div>
      <button
        className={styles["checkout_btn"]}
        onClick={() => {
          dispatch(openModal());
        }}
        style={{ opacity: `${cartData.length == 0 ? 0.5 : 1}` }}
        disabled={cartData?.length === 0}
      >
        Checkout
      </button>
    </div>
  );
};

export default TotalCart;
