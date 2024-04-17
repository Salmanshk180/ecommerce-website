import React, { useEffect } from "react";
import styles from "./ShoppingCart.module.css";
import Path from "../../components/shopping-cart-components/Path";
import Bar from "../../components/shopping-cart-components/Bar";
import Card from "../../components/shopping-cart-components/Card";
import TotalCart from "../../components/shopping-cart-components/TotalCart";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/Store";
import { getCartProducts } from "../../redux/slices/cart-products/cartProducts";
import Modal from "../../components/shopping-cart-components/modal/Modal";
const ShoppingCart = () => {
  const cartData = useSelector(
    (state: RootState) => state.cartProducts.cartData
  );
  const LoggedInUser = useSelector(
    (state: RootState) => state.users.LoggedInUser
  );
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getCartProducts(LoggedInUser!));
  }, [dispatch, LoggedInUser]);
  return (
    <React.Fragment>
      {isModalOpen && <Modal />}
      <div className={styles["shopping_cart"]}>
        <div className={styles["container"]}>
          <Path currentPath="Cart" />
        </div>
        <div className={styles["main_container"]}>
          <div className={styles["first_container"]}>
            <div className={styles["bar_container"]}>
              <Bar />
            </div>
            {cartData?.length === 0 ? (
              <h1 style={{ marginTop: "30px" }}>No Products</h1>
            ) : (
              cartData?.map((product) => (
                <Card key={product.id} data={product} />
              ))
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
