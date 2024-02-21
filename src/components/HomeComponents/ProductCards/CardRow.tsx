import { Fragment } from "react";
import Card from "./Card";
import p1 from "../../../assets/product-1.svg";
import p2 from "../../../assets/product-2.svg";
import p3 from "../../../assets/product-3.svg";
import p4 from "../../../assets/product-4.svg";
import p5 from "../../../assets/product-5.svg";
import styles from "./CardRow.module.css";
const initialState = [
  {
    src: p1,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    original_price: 16.48,
  },
  {
    src: p2,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    original_price: 16.48,
  },
  {
    src: p3,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    original_price: 16.48,
  },
  {
    src: p4,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    original_price: 16.48,
  },
  {
    src: p5,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    original_price: 16.48,
  },
];

const CardRow = () => {
  return (
    <Fragment>
      <div className={styles.card_row}>
        {initialState.map((data) => (
          <Card
            src={data.src}
            title={data.title}
            description={data.description}
            price={data.price}
            original_price={data.original_price}
          />
        ))}
      </div>
      <div className={styles.card_row} id={styles.second_row}>
        {initialState.map((data) => (
          <Card
            src={data.src}
            title={data.title}
            description={data.description}
            price={data.price}
            original_price={data.original_price}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default CardRow;
