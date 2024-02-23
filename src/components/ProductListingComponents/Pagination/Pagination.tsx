import { Fragment } from "react";
import styles from "./Pagination.module.css";

interface Props {
  numberOfCarousel: number;
  setSliceMin: (i: number) => void;
  setSliceMax: (i: number) => void;
}

const Pagination = (props: Props) => {
  const buttons = [];
  for (let i = 0; i < props.numberOfCarousel; i++) {
    buttons.push(
      <button
        key={i}
        className={styles.pagination_btn}
        onClick={() => {
          props.setSliceMin(i);
          props.setSliceMax(i + 1);
        }}
      >
        {i + 1}
      </button>
    );
  }
  
  return (
    <Fragment>
      <div className={styles.pagination}>
        <div className={styles.container}>
          <button
            className={styles.first_btn}
            onClick={() => {
              props.setSliceMin(0);
              props.setSliceMax(1);
            }}
          >
            First
          </button>
          {buttons}
          <button
            className={styles.next_btn}
            onClick={() => {
              props.setSliceMin(props.numberOfCarousel - 1);
              props.setSliceMax(props.numberOfCarousel);
            }}
          >
            Last
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Pagination;
