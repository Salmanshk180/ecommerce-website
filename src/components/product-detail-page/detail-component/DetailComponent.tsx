import React, { useEffect } from "react";
import styles from "./DetailComponent.module.css";
import Color from "../../home-components/feature-blogs/color/Color";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/slices/cart-products/cartProducts";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart, FaEye } from "react-icons/fa";
import { star_img } from "../../../assets/images";
import { AppDispatch, RootState } from "../../../redux/store/Store";
import { fetchOneProduct } from "../../../redux/slices/get-one-product/getOneProduct";

const DetailComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector((state: RootState) => state.oneProduct.data);
  const handleNavigate = () => {
    // dispatch(addToCart(props.data));
    // navigate("/shopping-cart");
  };
  useEffect(() => {
    // navigate(`/products/${product.product?.id}`);
  }, [product.product?.id]);
  return (
    <React.Fragment>
      <div className={styles["detail-component"]}>
        <p className={styles["floating_para"]}>
          {product.product?.product?.name}
        </p>
        <div className={styles["review_container"]}>
          <img src={star_img} alt="" />
          <img src={star_img} alt="" />
          <img src={star_img} alt="" />
          <img src={star_img} alt="" />
          <img src={star_img} alt="" />
          <span>10 Reviews</span>
        </div>
        <div className={styles["price_container"]}>
          <span style={{ color: "#aaa", textDecoration: "line-through" }}>
            ${product.product?.price}
          </span>
          <span style={{ color: "green" }}>${product.product?.discount_price}</span>
        </div>

        <div className={styles["availability_container"]}>
          Availability:{" "}
          <span>{product.product?.in_stock ? "In Stock" : "Out Of Stock"}</span>
        </div>
        <div className={styles["description_container"]}>
          <p>{product.product?.description}</p>
          <hr />
        </div>
        <div className={styles["color_container"]}>
          {product.product_variants
            ?.map((product) => product.color)
            .filter((color, index, self) => self.indexOf(color) === index)
            .map((color) => (
              <Color
                key={color}
                classname="first_color"
                displayBorder={true}
                color={color}
                productid={product.product?.product.id}
              />
            ))}
        </div>
        <div className={styles["button_container"]}>
          {product.product_variants
            ?.filter((variant) => variant.color === product.product?.color) // Filter variants by selected color
            .map((variant) => variant.size) // Get sizes of variants with selected color
            .filter((size, index, self) => self.indexOf(size) === index) // Remove duplicate sizes
            .map((size) => (
              <button
                key={size}
                style={{
                  backgroundColor:
                    product.product?.size == size ? "#23a6f0" : "#CCC",
                  color: product.product?.size == size ? "#FFF" : "#000",
                }}
                onClick={() => {
                  dispatch(
                    fetchOneProduct({
                      color: product.product?.color!,
                      size: size,
                      productid: product.product?.product.id,
                    })
                  );
                }}
              >
                {size}
              </button>
            ))}

          <FaHeart fontSize="25px" color="red" />
          <FaShoppingCart
            fontSize="25px"
            color="#00A0FF"
            onClick={handleNavigate}
          />
          <FaEye fontSize="25px" />
          {/* <img src={like} alt="" />
          <img src={cart} alt="" onClick={handleNavigate} />
          <img src={eye} alt="" /> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default DetailComponent;
