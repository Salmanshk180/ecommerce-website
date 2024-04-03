import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch  } from "../../../../redux/store/Store";
import styles from "./List.module.css";
import {
  filterAll,
  filterByCategory,
} from "../../../../redux/slices/filter-products/filterProducts"; // Update import path
interface Props {
  text: string;
  selected: boolean;
  onClick: () => void;
}
const List = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const color = props.selected?"#2352B6":"black";
  const fontWeigth = props.selected?"bold":"normal";
  return (
    <Fragment>
      <button
        className={styles["list-btn"]}
        style={{color:color,fontWeight:fontWeigth}}
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
