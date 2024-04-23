import styles from "./OrderDetail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/Store";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useEffect, useState } from "react";
import { addReview } from "../../redux/slices/reviews/reviews";
import { getOrderById } from "../../redux/slices/order/order";
const OrderDetail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState(false);
  const [addStar, setAddStar] = useState(0);
  const [product_variant_id, setProductVariantId] = useState("");
  const [description, setDescription] = useState("");
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const orderDetail = useSelector(
    (state: RootState) => state.order.order_details
  );
  const user_id = useSelector((state: RootState) => state.users.user?.id);
  useEffect(() => {
    setAddStar(0);
  }, []);
  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        styles={{ modal: { width: "350px" } }}
      >
        <h2>Add Review</h2>
        <div className={styles["review-container"]}>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id={styles["description"]}
            value={description}
            cols={50}
            rows={5}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div className={styles["star-contaner"]}>
            <button
              className={styles["star"]}
              onClick={() => setAddStar(1)}
              style={{ backgroundColor: addStar >= 1 ? "yellow" : "#ccc" }}
            ></button>
            <button
              className={styles["star"]}
              onClick={() => setAddStar(2)}
              style={{ backgroundColor: addStar >= 2 ? "yellow" : "#ccc" }}
            ></button>
            <button
              className={styles["star"]}
              onClick={() => setAddStar(3)}
              style={{ backgroundColor: addStar >= 3 ? "yellow" : "#ccc" }}
            ></button>
            <button
              className={styles["star"]}
              onClick={() => setAddStar(4)}
              style={{ backgroundColor: addStar >= 4 ? "yellow" : "#ccc" }}
            ></button>
            <button
              className={styles["star"]}
              onClick={() => setAddStar(5)}
              style={{ backgroundColor: addStar >= 5 ? "yellow" : "#ccc" }}
            ></button>
          </div>

          <button
            className={styles["button"]}
            onClick={async () => {
              await dispatch(
                addReview({
                  user_id: user_id!,
                  description: description,
                  star: addStar!,
                  product_variant_id: product_variant_id!,
                })
              );
              dispatch(getOrderById({ order_id: orderDetail?.order.id! }));
              setAddStar(0);
              setDescription("");
              setOpen(false);
            }}
          >
            Submit
          </button>
        </div>
      </Modal>
      <div className={styles["order-detail-page"]}>
        <h1>Order Detail</h1>
        <div className={styles["order-details"]}>
          <p className={styles["order-1"]}>Order ID: {orderDetail?.order.id}</p>
          <p>No Of Items: {orderDetail?.order.metadata?.length}</p>
          <p className={styles["address"]}>
            Shipping Address: {orderDetail?.order.address.building},
            {orderDetail?.order.address.street},
            {orderDetail?.order.address.city},{orderDetail?.order.address.state}
            ,{orderDetail?.order.address.pincode},
            {orderDetail?.order.address.country}
          </p>
        </div>
        <div className={styles["outer"]}>
          <div className={styles["inner-one"]}>
            <div className={styles["outer-header"]}>
              <div>
                <p>Product</p>
              </div>
            </div>
          </div>
          <div className={styles["inner-two"]}>
            <div className={styles["detail-container"]}>
              <p>Details</p>
            </div>
            <div>
              <p>Amount</p>
            </div>
            <div>
              <p>Quantity</p>
            </div>
            <div>
              <p>Subtotal</p>
            </div>
            <div>
              <p>Review</p>
            </div>
          </div>
        </div>
        <div className={styles["outer-two"]}>
          {orderDetail?.order.metadata?.map((variant) => (
            <div className={styles["outer-three"]}>
              <div className={styles["inner-three"]}>
                <img
                  src={variant?.product_variant?.images[0]}
                  alt="Product image"
                  className={styles["image"]}
                />
              </div>
              <div className={styles["inner-four"]}>
                <div id={styles["details"]}>
                  <div>
                    <h4>{variant?.product_variant?.product.name}</h4>
                    <div className={styles["color"]}>
                      <p>Color:</p>
                      <div
                        style={{
                          backgroundColor: `${variant?.product_variant?.color}`,
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                        }}
                      ></div>
                    </div>
                    <div className={styles["color"]}>
                      <p>Size:</p>
                      <p>{variant?.product_variant?.size}</p>
                    </div>
                  </div>
                </div>
                <div className={styles["price-container"]}>
                  <p className={styles["price"]}>Price:</p>
                  <p>${variant.product_variant.discount_price}</p>
                </div>
                <div className={styles["price-container"]}>
                  <p className={styles["price"]}>Quantity:</p>
                  <p>{variant.quantity}</p>
                </div>
                <div className={styles["price-container"]}>
                  <p className={styles["price"]}>Amount:</p>
                  <p>${variant.total}</p>
                </div>
                <div className={styles["reviews"]}>
                  {variant.star ? (
                    <div className={styles["button-contaner"]}>
                      <button
                        className={styles["star"]}
                        style={{
                          backgroundColor:
                            variant?.star! >= 1 ? "yellow" : "#ccc",
                        }}
                      ></button>
                      <button
                        className={styles["star"]}
                        style={{
                          backgroundColor:
                            variant?.star! >= 2 ? "yellow" : "#ccc",
                        }}
                      ></button>
                      <button
                        className={styles["star"]}
                        style={{
                          backgroundColor:
                            variant?.star! >= 3 ? "yellow" : "#ccc",
                        }}
                      ></button>
                      <button
                        className={styles["star"]}
                        style={{
                          backgroundColor:
                            variant?.star! >= 4 ? "yellow" : "#ccc",
                        }}
                      ></button>
                      <button
                        className={styles["star"]}
                        style={{
                          backgroundColor:
                            variant?.star! >= 5 ? "yellow" : "#ccc",
                        }}
                      ></button>
                    </div>
                  ) : (
                    <button
                      className={styles["button"]}
                      onClick={() => {
                        setProductVariantId(variant.product_variant_id);
                        onOpenModal();
                      }}
                    >
                      Add Review
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr />
        <div className={styles["total"]}>
          <p>Total:</p>
          <p className={styles["total-value"]}>${orderDetail?.order.total}</p>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
