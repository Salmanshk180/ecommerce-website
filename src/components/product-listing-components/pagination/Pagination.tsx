import { Fragment } from "react";
import styles from "./Pagination.module.css";

interface Props {
  numberOfCarousel: number;
}

const Pagination = (props: Props) => {
  const buttons = [];
  for (let i = 0; i < props.numberOfCarousel; i++) {
    buttons.push(
      <button key={i} className={styles.pagination_btn} onClick={() => {}}>
        {i + 1}
      </button>
    );
  }

  return (
    <Fragment>
      <div className={styles.pagination}>
        <div className={styles.container}>
          <button className={styles.first_btn} onClick={() => {}}>
            First
          </button>
          {buttons}
          <button className={styles.next_btn} onClick={() => {}}>
            Next
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Pagination;
