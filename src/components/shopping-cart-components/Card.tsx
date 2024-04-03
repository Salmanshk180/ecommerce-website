import { ChangeEvent, useEffect, useState } from "react";
import styles from "./Card.module.css";
import { useDispatch } from "react-redux";
import {
  changeQuantity,
  removeFromCart,
} from "../../redux/slices/cart-products/cartProducts";
import { IoMdCloseCircle } from "react-icons/io";
interface ObjectProps {
  id: string;
  src: string;
  title: string;
  description: string;
  original_price: number;
  price: number;
  showColors: boolean;
  category: string;
  brand: string;
  quantity: number;
  subtotal: number;
}

interface Props {
  data: ObjectProps;
}

const Card = (props: Props) => {
  const [quantity, setQuantity] = useState(props.data.quantity); // Initialize with data passed from parent
  const [totalPrice, setTotalPrice] = useState(props.data.original_price);
  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * props.data.original_price);
  };

  useEffect(() => {
    setTotalPrice(quantity * props.data.original_price);
    dispatch(
      changeQuantity({ id: props.data.id, quantity: quantity, totalPrice })
    );
  }, [
    quantity,
    handleChange,
    props.data.id,
    props.data.original_price,
    totalPrice,
    dispatch,
  ]);

  return (
    <div className={styles["cart_card"]}>
      <div className={styles["card_container"]}>
        <IoMdCloseCircle
          className={styles["delete-btn"]}
          fontSize={24}
          color="#FF0000"
          onClick={() => {
            dispatch(removeFromCart({ id: props.data.id }));
          }}
        />
        <img src={props.data.src} alt="" />
        <div className={styles["card_desc"]}>
          <div className={styles["inside_container"]}>
            <p>{props.data.title}</p>
            <p className={styles["color_container"]}>
              Color:
              <div className={styles["color"]}></div>
            </p>
            <p>Price: ${props.data.original_price}</p>
          </div>
          <p>${totalPrice.toFixed(2)}</p>
          <input
            type="number"
            min={1}
            name=""
            id=""
            value={quantity}
            onChange={handleChange}
            className={styles["quantity_input"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
