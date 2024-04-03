import { Fragment, useEffect, useState } from "react";
import styles from "./ProductCards.module.css";
import CardRow from "./CardRow";
import Card from "./Card";
import useBreakpoint from "../../../hooks/breakpoint/useBreakpoints";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
interface ObjectProps {
  src: string;
  title: string;
  description: string;
  price: number;
  original_price: number;
  showColors: boolean;
}

const ProductCards = () => {
  const breakpoint = useBreakpoint();
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);
  const productData = useSelector((state: any) => state.product);
  const navigate = useNavigate();
  let numberOfCards = 10;
  if (breakpoint === "xs") {
    numberOfCards = 5;
  }

  return (
    <Fragment>
      <div className={styles.product_cards}>
        <div className={styles.container}>
          <div className={styles.description}>
            <h6 className={styles.title_1}>Feature Products</h6>
            <h6 className={styles.title_2}>BESTSELLER PRODUCTS</h6>
            <h6 className={styles.title_3}>
              Problems trying to resolve the conflict between
            </h6>
          </div>
          <div className={styles["card-container"]}>
            {productData.slice(min, max).map((data: ObjectProps) => (
              <Card
                src={data.src}
                title={data.title}
                description={data.description}
                price={data.price}
                original_price={data.original_price}
                show_colors={data.showColors}
              />
            ))}
          </div>
          ;
          <button
            className={styles.load_button}
            // onClick={() => setMax((prev) => prev + 10)}
            onClick = {()=>navigate("/products")}
          >
            LOAD MORE PRODUCTS
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCards;
