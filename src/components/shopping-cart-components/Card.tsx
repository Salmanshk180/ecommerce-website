import { ChangeEvent, useState } from "react";
import styles from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { IoMdCloseCircle } from "react-icons/io";
import {
  Product,
  deleteCart,
  getCartProducts,
  updateCart,
} from "../../redux/slices/cart-products/cartProducts";
import { AppDispatch, RootState } from "../../redux/store/Store";

interface Props {
  data: Product;
}

const Card = (props: Props) => {
  const [quantity, setQuantity] = useState(props.data.quantity); // Initialize with data passed from parent
  const dispatch = useDispatch<AppDispatch>();
  const LoggedInUser = useSelector(
    (state: RootState) => state.users.LoggedInUser
  );
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity);
    await dispatch(
      updateCart({
        product_variant_id: props.data.product_variants.id,
        quantity: newQuantity,
      })
    ).then(()=>{
      dispatch(getCartProducts(LoggedInUser!));
    })
  };
  let price = props.data.product_variants.discount_price
    ? props.data.product_variants.discount_price
    : props.data.product_variants.price;

  return (
    <div className={styles["cart_card"]}>
      <div className={styles["card_container"]}>
        <div className={styles["img_container"]}>
          <img src={props.data.product_variants.images[0]} alt="" />
          <IoMdCloseCircle
            className={styles["delete-btn"]}
            fontSize={24}
            color="#FF0000"
            onClick={async () => {
              await dispatch(deleteCart({ cart_id: props.data.id }));
              dispatch(getCartProducts(LoggedInUser!));
            }}
          />
        </div>
        <div className={styles["card_desc"]}>
          <div className={styles["inside_container"]}>
            <p style={{ fontWeight: "700", fontSize: "18px" }}>
              {props.data.product_variants.product.name}
            </p>
            <p className={styles["color_container"]}>
              Color:
              <span
                className={styles["color"]}
                style={{ backgroundColor: props.data.product_variants.color }}
              ></span>
            </p>
            <p>
              <span style={{ fontWeight: "700" }}>Price: </span>${price}
            </p>
          </div>
          <div className={styles["final_container"]}>
            <p style={{ fontWeight: "700" }}>${props.data.subtotal}</p>
            <input
              type="number"
              min={1}
              name=""
              id=""
              value={quantity}
              onChange={(e)=>handleChange(e)}
              className={styles["quantity_input"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
