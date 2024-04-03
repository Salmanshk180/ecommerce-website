import React from "react";
import styles from "./DetailComponent.module.css";
import Color from "../../home-components/feature-blogs/color/Color";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/cart-products/cartProducts";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart,FaEye } from "react-icons/fa";
import { star_img } from "../../../assets/images";
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
}
interface Props {
  data?: ObjectProps;
}

const DetailComponent = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = () => {
    dispatch(addToCart(props.data));
    navigate("/shopping-cart");
  };
  return (
    <React.Fragment>
      <div className={styles["detail-component"]}>
        <p className={styles["floating_para"]}>{props.data?.title}</p>
        <div className={styles["review_container"]}>
          <img src={star_img} alt="" />
          <img src={star_img} alt="" />
          <img src={star_img} alt="" />
          <img src={star_img} alt="" />
          <img src={star_img} alt="" />
          <span>10 Reviews</span>
        </div>
        <div className={styles["price_container"]}>
          ${props.data?.original_price}
        </div>
        <div className={styles["availability_container"]}>
          Availability: <span>In Stock</span>
        </div>
        <div className={styles["description_container"]}>
          <p>{props.data?.description}</p>
          <hr />
        </div>
        <div className={styles["color_container"]}>
          {props.data?.showColors ? (
            <>
              <Color classname="first_color" />
              <Color classname="second_color" />
              <Color classname="third_color" />
              <Color classname="fourth_color" />
            </>
          ) : (
            ""
          )}
        </div>
        <div className={styles["button_container"]}>
          <button>Select Option</button>
            <FaHeart fontSize="25px" color="red"/>
            <FaShoppingCart fontSize="25px" color="#00A0FF" onClick={handleNavigate} />
            <FaEye fontSize="25px"/>
          {/* <img src={like} alt="" />
          <img src={cart} alt="" onClick={handleNavigate} />
          <img src={eye} alt="" /> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default DetailComponent;
