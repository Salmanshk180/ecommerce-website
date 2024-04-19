import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/Store";
import styles from "./ReviewComponent.module.css";
const ReviewComponent = () => {
  const reviews = useSelector((state: RootState) => state.review.reviews);
  
  return (
    <div className={styles["review"]}>
      {reviews.length == 0 ? (
        <h3 style={{ textAlign:"center", width: "100%" }}>No reviews</h3>
      ) : (
        <>
          {reviews?.map((review) => (
            <div className={styles["review-card"]}>
              <div>
                <h4>
                  {review.user?.first_name} {review.user?.last_name}
                </h4>
                <p>{review.description}</p>
                <div className={styles["button-container"]}>
                  <button
                    className={styles["star"]}
                    style={{
                      backgroundColor: review?.star! >= 1 ? "yellow" : "white",
                    }}
                  ></button>
                  <button
                    className={styles["star"]}
                    style={{
                      backgroundColor: review?.star! >= 2 ? "yellow" : "white",
                    }}
                  ></button>
                  <button
                    className={styles["star"]}
                    style={{
                      backgroundColor: review?.star! >= 3 ? "yellow" : "white",
                    }}
                  ></button>
                  <button
                    className={styles["star"]}
                    style={{
                      backgroundColor: review?.star! >= 4 ? "yellow" : "white",
                    }}
                  ></button>
                  <button
                    className={styles["star"]}
                    style={{
                      backgroundColor: review?.star! >= 5 ? "yellow" : "white",
                    }}
                  ></button>
                </div>
                <p>{review?.created_at?.toString().split("T")[0]!}</p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ReviewComponent;
