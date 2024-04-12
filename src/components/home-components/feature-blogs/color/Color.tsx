import { Fragment, useEffect } from "react";
import styles from "./Color.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store/Store";
import { fetchOneProduct } from "../../../../redux/slices/get-one-product/getOneProduct";
import { useNavigate } from "react-router-dom";
interface Props {
  classname: string;
  color?: string;
  productid?: string;
  displayBorder?: boolean;
}
const Color = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const product = useSelector(
    (state: RootState) => state.oneProduct.data.product
  );

  const handleNavigate = () => {
    dispatch(
      fetchOneProduct({ color: props.color, productid: props.productid })
    );
    // navigate(`/products/${product?.id}`);
  };
  // useEffect(() => {
  //   if (product?.id) {
  //   }
  // }, [handleNavigate]); // Navigate when product.id changes

  return (
    <Fragment>
      {props.displayBorder ? (
        <button
          style={{
            border:
              product?.color == props.color
                ? "3px solid rgb(35, 166, 240)"
                : "none",
            borderRadius: "50%",
          }}
          onClick={() => {
            handleNavigate();
          }}
        >
          <div
            className={styles[props.classname]}
            style={{ backgroundColor: props.color }}
          ></div>
        </button>
      ) : (
        <div
          className={styles[props.classname]}
          style={{ backgroundColor: props.color }}
        ></div>
      )}
    </Fragment>
  );
};

export default Color;
