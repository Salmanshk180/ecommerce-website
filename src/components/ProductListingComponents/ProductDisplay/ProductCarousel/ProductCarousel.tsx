import { Fragment } from "react";
import styles from "./ProductCarousel.module.css";
import CardRow from "../../../HomeComponents/ProductCards/CardRow";

interface ObjectProps {
  initialState: {
    src: string;
    title: string;
    description: string;
    price: number;
    original_price: number;
    showColors: boolean;
  }[];
}
interface Props {
  min: number;
  max: number;
  data: Array<ObjectProps>;
}
const ProductCarousel = (props: Props) => {
  return (
    <Fragment>
      <div className={styles.product_carousel}>
        {props.data.slice(props.min, props.max).map((data) => (
          <CardRow
            initialState={data.initialState}
            width={100}
            numberOfRows={10}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default ProductCarousel;
