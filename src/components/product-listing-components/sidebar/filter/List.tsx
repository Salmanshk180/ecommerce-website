import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store/Store";
import styles from "./List.module.css";
import { fetchProducts } from "../../../../redux/slices/product-data/productData";
import { addCategory } from "../../../../redux/slices/filters/filters.slices";
interface Props {
  text: string;
  selected: boolean;
  onClick: () => void;
}
const List = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const color = props.selected ? "#2352B6" : "black";
  const fontWeigth = props.selected ? "bold" : "normal";
  const filters = useSelector((state: RootState) => state.filters.filter);
  
  return (
    <Fragment>
      <button
        className={styles["list-btn"]}
        style={{ color: color, fontWeight: fontWeigth }}
        onClick={() => {
          props.onClick();
          dispatch(addCategory({ category: props.text.toLowerCase() }));
        }}
      >
        {props.text}
      </button>
    </Fragment>
  );
};

export default List;
