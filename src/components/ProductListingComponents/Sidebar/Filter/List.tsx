import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/Store/Store";
import styles from "./List.module.css";
import { filterByCategory } from "../../../../redux/Slices/filterProducts"; // Update import path
interface Props {
  text: string;
}
const List = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const filterProducts = useSelector(
    (state: RootState) => state.filterProducts
  );

  return (
    <Fragment>
      <button
        className={styles["list-btn"]}
        onClick={() => {
          console.log(props.text);
          dispatch(filterByCategory({ category: props.text }));
        }}
      >
        {props.text}
      </button>
    </Fragment>
  );
};

export default List;
