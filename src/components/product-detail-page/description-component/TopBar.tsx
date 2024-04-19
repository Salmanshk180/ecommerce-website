import React, { Dispatch, SetStateAction } from "react";
import styles from "./TopBar.module.css";
import { RootState } from "../../../redux/store/Store";
import { useSelector } from "react-redux";

interface Props {
  componentRender: string;
  setComponentRender: Dispatch<SetStateAction<string>>;
}
const TopBar = (props: Props) => {
  const reviews = useSelector((state: RootState) => state.review.reviews);
  return (
    <React.Fragment>
      <div className={styles["top-bar"]}>
        <button
          onClick={() => props.setComponentRender("Description")}
          style={{
            color:
              props.componentRender === "Description" ? "#23A6F0" : "black",
            fontWeight:
              props.componentRender === "Description" ? "bold" : "normal",
          }}
        >
          Description
        </button>
     
        <button
          onClick={() => props.setComponentRender("reviews")}
          style={{
            color: props.componentRender === "reviews" ? "#23A6F0" : "black",
            fontWeight: props.componentRender === "reviews" ? "bold" : "normal",
          }}
        >
          Reviews({reviews.length})
        </button>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default TopBar;
