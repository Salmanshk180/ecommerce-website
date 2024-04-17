import React from "react";
import styles from "./Step3.module.css";
const Step3 = () => {
  return (
    <div>
      <div className={styles["success-mark"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="11"
            fill="none"
            stroke="#00c851"
            strokeWidth="2"
          />
          <path
            fill="none"
            stroke="#00c851"
            strokeWidth="2"
            d="M5.0 12 l5 5 9 -10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h2>Order Placed</h2>
    </div>
  );
};

export default Step3;
