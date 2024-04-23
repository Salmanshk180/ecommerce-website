import { useDispatch, useSelector } from "react-redux";
import styles from "./WatchList.module.css";
import { AppDispatch, RootState } from "../../redux/store/Store";
import { useEffect } from "react";
import {
  addToWatchList,
  getWatchlist,
} from "../../redux/slices/watchlist/watchlist";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { addToCartProduct, getCartProducts } from "../../redux/slices/cart-products/cartProducts";
import { toast } from "react-toastify";
const WatchList = () => {
  const watchlist = useSelector(
    (state: RootState) => state.watchlist.watchList
  );
  const LoggedInUser = useSelector(
    (state: RootState) => state.users.LoggedInUser
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getWatchlist(LoggedInUser!));
  }, [dispatch]);
  return (
    <div className={styles["outer-container"]}>
      <div className={styles["card-container"]}>
        {watchlist.length === 0 ? (
          <h1
            style={{
              textAlign: "center",
              width: "100%",
              margin: "auto",
              height: "100%",
            }}
          >
            No Data Found
          </h1>
        ) : (
          <>
            {watchlist?.map((data) => (
              <div className={styles["card"]}>
                <div className={styles["img-container"]}>
                  <img
                    src={data.product_variants.images[0]}
                    alt=""
                    className={styles["image"]}
                  />
                </div>
                <div className={styles["description-container"]}>
                  <div className={styles["text-container"]}>
                    <h3>{data.product_variants.product.name}</h3>
                    <div className={styles["color-container"]}>
                      <p>Color:</p>
                      <div
                        style={{ backgroundColor: data.product_variants.color }}
                        className={styles["color"]}
                      ></div>
                    </div>
                    <p>Size: {data.product_variants.size}</p>
                    <p>
                      Price: $
                      {data.product_variants.discount_price
                        ? data.product_variants.discount_price
                        : data.product_variants.price}
                    </p>
                  </div>
                  <div className={styles["btn-container"]}>
                    <button
                      onClick={() =>
                        dispatch(
                          addToWatchList({
                            product_variant_id: data.product_variants.id,
                            token: LoggedInUser!,
                          })
                        ).then(() => {
                          toast.success("Product Remove From WatchList");
                          dispatch(getWatchlist(LoggedInUser!));
                        })
                      }
                      style={{ border: "none" }}
                    >
                      <FaHeart fontSize="20px" color="red" />
                    </button>
                    <button
                      onClick={() =>
                        dispatch(
                          addToCartProduct({
                            product_variant_id: data.product_variants.id,
                            token: LoggedInUser!,
                          })
                        ).then(() => {
                          toast.success("Product Added To Cart");
                          dispatch(getCartProducts(LoggedInUser!));
                        })
                      }
                      disabled={!data.product_variants?.in_stock ? true : false}
                      style={{ border: "none" }}
                    >
                      <FaShoppingCart
                        fontSize="20px"
                        color={
                          !data.product_variants?.in_stock ? "#ccc" : "#00A0FF"
                        }
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default WatchList;
