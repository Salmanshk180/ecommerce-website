import React, { Dispatch, FormEvent, SetStateAction, useEffect } from "react";
import styles from "./Step2.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store/Store";
import { addOrder } from "../../../redux/slices/order/order";
import { getCartProducts } from "../../../redux/slices/cart-products/cartProducts";

interface Props {
  setShowNavigation: Dispatch<SetStateAction<boolean>>;
  setShowOrderSuccess: Dispatch<SetStateAction<boolean>>;
}
const Step2 = (props: Props) => {
  const cartData = useSelector(
    (state: RootState) => state.cartProducts.cartData
  );
  const shippingPrice = 0;
  const totalPrice =
    shippingPrice + cartData.reduce((total, cart) => total + cart.subtotal, 0);
  const user = useSelector((state: RootState) => state.users.user);
  useEffect(() => {
    props.setShowNavigation(false);
  }, [props]);
  const dispatch = useDispatch<AppDispatch>();
  const quantity = cartData.reduce(
    (totalQuantity, cart) => totalQuantity + cart.quantity,
    0
  );

  const LoggedinUser = useSelector(
    (state: RootState) => state.users.LoggedInUser
  );
  const selectedAddress = useSelector(
    (state: RootState) => state.address.selectedAddress
  );
  const handleOrder = async () => {
    const cartdatas = cartData.map((cart) => ({
      product_variant_id: cart.product_variants.id,
      quantity: cart.quantity,
      subtotal: cart.subtotal,
    }));
    await dispatch(
      addOrder({
        user_id: user?.id!,
        data: {
          quantity: quantity,
          total: totalPrice,
          address_id: selectedAddress?.id!,
          metadata: cartdatas,
          order_status: "success",
        },
      })
    );
    props.setShowOrderSuccess(true);
    dispatch(getCartProducts(LoggedinUser!));
  };

  return (
    <div className={styles["step2-container"]}>
      <div className={styles["display-container"]}>
        <div className={styles["header-container"]}>
          <div className={styles["header-1"]}>
            <p>Product</p>
          </div>
          <p>Price</p>
          <div className={styles["header-1"]} id={styles["header-01"]}>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
        </div>
        {cartData.map((cart) => (
          <div className={styles["header-container"]} id={styles["card"]}>
            <div className={styles["header-1"]} id={styles["header-2"]}>
              <h3>{cart.product_variants.product.name}</h3>
              <div className={styles["color-container"]}>
                <p>color:</p>
                <div
                  style={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                    backgroundColor: `${cart.product_variants.color}`,
                  }}
                ></div>
              </div>
              <p>size: {cart.product_variants.size}</p>
            </div>
            <p>
              $
              {cart.product_variants.discount_price
                ? cart.product_variants.discount_price
                : cart.product_variants.price}
            </p>
            <div className={styles["header-1"]} id={styles["header-3"]}>
              <p>{cart.quantity}</p>
              <p>${cart.subtotal}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles["total-container"]}>
        <hr />
        <div className={styles["shipping"]}>
          <p>Shipping Cost</p>
          <p>${shippingPrice}</p>
        </div>
        <div className={styles["totalprice"]}>
          <p>Total</p>
          <p>${totalPrice}</p>
        </div>
      </div>
      <button
        onClick={(e) => {
          handleOrder();
        }}
      >
        Order
      </button>
    </div>
  );
};

export default Step2;
