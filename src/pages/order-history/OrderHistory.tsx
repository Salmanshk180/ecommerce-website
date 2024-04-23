/* OrderHistory.tsx */

import React, { useEffect } from "react";
import styles from "./OrderHistory.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/Store";
import { getOrder, getOrderById } from "../../redux/slices/order/order";
import OrderDetail from "./OrderDetail";
import { useNavigate } from "react-router-dom";

const OrderHistory = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.users.LoggedInUser);
  const orderHistory = useSelector(
    (state: RootState) => state.order.order_history
  );
  const isOpen = useSelector((state: RootState) => state.order.openModal);

  useEffect(() => {
    dispatch(getOrder({ token: token! }));
  }, [dispatch, token]);

  return (
    <div className={styles["outer-container"]}>
      <div>
        {isOpen && <OrderDetail />}
        <h1>Order History</h1>
        <div className={styles["table-container"]}>
          {" "}
          {/* Wrap the table in a container */}
          <table className={styles["table"]}>
            <thead className={styles["thead"]}>
              <tr>
                <th>Order ID</th>
                <th>Total Items</th>
                <th>Total Amount</th>
                <th>Address</th>
                <th>Order Status</th>
                <th>Date</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody className={styles["tbody"]}>
              {orderHistory.map((order) => (
                <tr key={order.id}>
                  <td className={styles["first-1"]}>{order.id}</td>
                  <td>{order.quantity}</td>
                  <td>${order.total}</td>
                  <td>
                    {order.address?.building}, {order.address?.street},{" "}
                    {order.address?.city}, {order.address?.state},{" "}
                    {order.address?.pincode}, {order.address?.country}
                  </td>
                  <td>{order.order_status}</td>
                  <td>{order.created_at?.toString().split("T")[0]!}</td>
                  <td>
                    <button
                      onClick={() => {
                        navigate("order-detail");
                        dispatch(getOrderById({ order_id: order.id! }));
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
