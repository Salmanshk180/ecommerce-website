import { Fragment } from "react";
import styles from "./Pagination.module.css";
const Pagination = () => {
  return (
    <Fragment>
      <div className={styles.pagination}>
        <div className={styles.container}>
          <button className={styles.first_btn}>First</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button  className={styles.next_btn}>Next</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Pagination;
