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
}
const Color = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const product = useSelector(
    (state: RootState) => state.oneProduct.data.product
  );
  useEffect(() => {
    if (product?.id) {
      navigate(`/products/${product?.id}`);
    }
  }, [product]); // Navigate when product.id changes

  const handleNavigate = () => {
    dispatch(fetchOneProduct({ color: props.color, productid: props.productid }));
  };

  return (
    <Fragment>
      <button
        style={{
          backgroundColor: product?.color == props.color ? "red" : "#ccc",
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
    </Fragment>
  );
};

export default Color;
