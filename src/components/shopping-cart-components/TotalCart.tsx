import styles from "./TotalCart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/Store";
import { closeModal, openModal } from "../../redux/slices/modal/modal";

const TotalCart = () => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector((state:RootState)=>state.modal.isOpen);
  
  const shippingPrice = "Free";
  return (
    <div className={styles["total_cart"]}>
      <p className={styles["title"]}>Cart Total</p>
      <div className={styles["list"]}>
        <p>Shopping:</p>
        {/* <p style={{ fontWeight: "700" }}>${shoppingPrice.toFixed(2)}</p> */}
      </div>
      <hr />
      <div className={styles["list"]}>
        <p>Shipping:</p>
        <p style={{ fontWeight: "700" }}>{shippingPrice}</p>
      </div>
      <hr />
      <div className={styles["list"]}>
        <p>Total:</p>
        {/* <p style={{ fontWeight: "700" }}>${total.toFixed(2)}</p> */}
      </div>
      <button
        className={styles["checkout_btn"]}
        onClick={() => {
          dispatch(openModal());
        }}
      >
        Checkout
      </button>
    </div>
  );
};

export default TotalCart;
