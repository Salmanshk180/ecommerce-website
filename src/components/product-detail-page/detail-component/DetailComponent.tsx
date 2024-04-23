import React, { useEffect, useState } from "react";
import styles from "./DetailComponent.module.css";
import Color from "../../home-components/feature-blogs/color/Color";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { AppDispatch, RootState } from "../../../redux/store/Store";
import { fetchOneProduct } from "../../../redux/slices/get-one-product/getOneProduct";
import { toast } from "react-toastify";
import {
  addToCartProduct,
  getCartProducts,
} from "../../../redux/slices/cart-products/cartProducts";
import { getReview } from "../../../redux/slices/reviews/reviews";
import { addToWatchList, getWatchlist } from "../../../redux/slices/watchlist/watchlist";

const DetailComponent = () => {
  const [addStar, setAddStar] = useState(0);
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector((state: RootState) => state.oneProduct.data);
  const isLoggedin = useSelector((state: RootState) => state.users.isLoggedin);
  const reviews = useSelector((state: RootState) => state.review);
  const LoggedinUser = useSelector(
    (state: RootState) => state.users.LoggedInUser
  );
  const addProductToCart = () => {
    if (!isLoggedin) {
      toast.error("You are not logged in !!");
    } else {
      dispatch(
        addToCartProduct({
          product_variant_id: product.product?.id!,
          token: LoggedinUser!,
        })
      ).then(() => dispatch(getCartProducts(LoggedinUser!)));
      toast.success("Product added to cart successfully");
    }
  };
  const addProductToWatchList = () => {
    if (!isLoggedin) {
      toast.error("You are not logged in !!");
    } else {
      dispatch(
        addToWatchList({
          product_variant_id: product.product?.id!,
          token: LoggedinUser!,
        })
      ).then(() => dispatch(getWatchlist(LoggedinUser!)));
      toast.success("Product added to Watchlist successfully");
    }
  };
  useEffect(() => {
    setAddStar(reviews?.averageRating);
  }, [reviews.averageRating]);

  return (
    <React.Fragment>
      <div className={styles["detail-component"]}>
        <p className={styles["floating_para"]}>
          {product.product?.product?.name}
        </p>
        <div className={styles["review_container"]}>
          <button
            className={styles["star"]}
            onClick={() => setAddStar(1)}
            style={{ backgroundColor: addStar >= 1 ? "yellow" : "#ccc" }}
          ></button>
          <button
            className={styles["star"]}
            onClick={() => setAddStar(1)}
            style={{ backgroundColor: addStar >= 2 ? "yellow" : "#ccc" }}
          ></button>
          <button
            className={styles["star"]}
            onClick={() => setAddStar(1)}
            style={{ backgroundColor: addStar >= 3 ? "yellow" : "#ccc" }}
          ></button>
          <button
            className={styles["star"]}
            onClick={() => setAddStar(1)}
            style={{ backgroundColor: addStar >= 4 ? "yellow" : "#ccc" }}
          ></button>
          <button
            className={styles["star"]}
            onClick={() => setAddStar(1)}
            style={{ backgroundColor: addStar >= 5 ? "yellow" : "#ccc" }}
          ></button>

          <span>{reviews?.numberOfReviews} Reviews</span>
        </div>
        <div className={styles["price_container"]}>
          <span style={{ color: "#aaa", textDecoration: "line-through" }}>
            ${product.product?.price}
          </span>
          <span style={{ color: "green" }}>
            ${product.product?.discount_price }
          </span>
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
                onClick={async () => {
                  await dispatch(
                    fetchOneProduct({
                      color: product.product?.color!,
                      size: size,
                      productid: product.product?.product.id,
                    })
                  ).then((data: any) => {
                    dispatch(getReview(data.payload.product.id));
                  });
                }}
              >
                {size}
              </button>
            ))}

          <button
            onClick={() => {
             addProductToWatchList();
            }}
          style={{ backgroundColor: "#fff" }}
          >
            <FaHeart fontSize="25px" color="red" />
          </button>
          <button
            onClick={() => {
              addProductToCart();
            }}
            disabled={!product.product?.in_stock ? true : false}
            style={{ backgroundColor: "#fff" }}
          >
            <FaShoppingCart
              fontSize="25px"
              color={!product.product?.in_stock ? "#ccc" : "#00A0FF"}
            />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DetailComponent;
