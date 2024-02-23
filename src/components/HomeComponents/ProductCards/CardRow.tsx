import { Fragment } from "react";
import Card from "./Card";

import styles from "./CardRow.module.css";

interface ArrayProp {
  src: string;
  title: string;
  description: string;
  price: number;
  original_price: number;
  showColors: boolean;
}
interface Props {
  initialState: Array<ArrayProp>;
}
const CardRow = (props: Props) => {
  return (
    <Fragment>
      <div className={styles.card_row}>
        {props.initialState.slice(0,).map((data) => (
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
   
    </Fragment>
  );
};

export default CardRow;
