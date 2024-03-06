import { Fragment } from "react";
import styles from "./Pagination.module.css";
import { useSelector } from "react-redux";

interface Props {
  numberOfCarousel: number;
  setSliceMin: (i: number) => void | number;
  setSliceMax: (i: number) => void | number;
}

const Pagination = (props: Props) => {
  const buttons = [];
  for (let i = 0; i < props.numberOfCarousel; i++) {
    buttons.push(
      <button
        key={i}
        className={styles.pagination_btn}
        onClick={() => {
          props.setSliceMin(i*10);
          props.setSliceMax(i*10+10);
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
              props.setSliceMax(10);
            }}
          >
            First
          </button>
          {buttons}
          <button
            className={styles.next_btn}
            onClick={() => {
              props.setSliceMin(props.numberOfCarousel * 10 - 10);
              props.setSliceMax(props.numberOfCarousel * 10);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Pagination;
