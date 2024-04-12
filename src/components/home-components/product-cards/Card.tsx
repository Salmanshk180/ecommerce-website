import { Fragment } from "react";
import styles from "./Card.module.css";
import Color from "../feature-blogs/color/Color";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/Store";
interface Props {
  id?: string;
  src: string;
  title: string;
  description: string;
  price: number;
  original_price: number;
  show_colors: string;
  product?: {
    id: string;
  };
}

const Card = (props: Props) => {
  const productVariants = useSelector(
    (state: RootState) => state.filters.productVariants
  );
  const products = productVariants.flatMap((product) => product);
  const productVariantsForProduct = products.filter(
    (variant) => variant.product?.id === props.product?.id
  );
  const uniqueColors = Array.from(
    new Set(productVariantsForProduct.map((variant) => variant.color))
  );
  return (
    <Fragment>
      <div className={styles.card}>
        <img src={props.src} alt="" />
        <div className={styles.desc}>
          <h6 className={styles.title}>{props.title}</h6>
          <h6 className={styles.description}>{props.description}</h6>
          <div className={styles.price_container}>
            <h6 className={styles.original_price} style={{textDecorationLine:"line-through"}}>${props.original_price}</h6>
            <h6 className={styles.price}>${props.price}</h6>
          </div>
            <div className={styles.color_container}>
              {uniqueColors.map((color) => (
                <Color key={color} classname="first_color" color={color} displayBorder={false}/>
              ))}
            </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
