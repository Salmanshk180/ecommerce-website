import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/Store/Store";
import styles from "./List.module.css";
import {
  filterAll,
  filterByCategory,
} from "../../../../redux/Slices/filterProducts"; // Update import path
interface Props {
  text: string;
  selected: boolean;
  onClick: () => void;
}
const List = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Fragment>
      <button
        className={styles["list-btn"]}
        style={{ color: `${props.selected}?#FFF:black` }}
        onClick={() => {
          props.onClick();
          dispatch(filterByCategory({ category: props.text }));
          dispatch(filterAll());
        }}
      >
        {props.text}
      </button>
    </Fragment>
  );
};

export default List;
