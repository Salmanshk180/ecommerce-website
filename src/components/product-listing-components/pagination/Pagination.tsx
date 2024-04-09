import { Fragment } from "react";
import styles from "./Pagination.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/Store";
import { changePage } from "../../../redux/slices/filters/filters.slices";

const Pagination = () => {
  const buttons = [];
  const page = useSelector((state: RootState) => state.filters.filter.page);
  const limit = useSelector((state: RootState) => state.filters.filter.limit);
  const total = useSelector((state: RootState) => state.filters.total);
  const dispatch = useDispatch();
  const totalPages = Math.ceil(total / limit);
  const handlePageClick = (pageNumber: number) => {
    dispatch(changePage({ page: pageNumber }));
  };
  for (let i = 0; i < totalPages; i++) {
    if (i === 0 || i === totalPages - 1 || (i >= page - 2 && i <= page + 1)) {
      buttons.push(
        <button
          key={i}
          className={styles.pagination_btn}
          style={{
            backgroundColor: page === i + 1 ? "#23a6f0" : "#FFF",
            color: page === i + 1 ? "white" : "#23a6f0",
          }}
          onClick={() => handlePageClick(i + 1)}
        >
          {i + 1}
        </button>
      );
    } else if (
      buttons.length > 0 &&
      buttons[buttons.length - 1].key !== "ellipsis"
    ) {
      buttons.push(
        <button
          key="ellipsis"
          className={styles.pagination_btn}
          style={{
            backgroundColor: "#FFF",
            color: "#23a6f0",
            cursor: "default",
          }}
          disabled
        >
          ...
        </button>
      );
    }
  }

  return (
    <Fragment>
      <div className={styles.pagination}>
        <div className={styles.container}>
          <button
            className={styles.pagination_btn}
            onClick={() => handlePageClick(1)}
            disabled={page === 1}
            style={{ color: page === 1 ? "#CCC" : "#23a6f0" }}
          >
            First
          </button>
          {buttons}
          <button
            className={styles.pagination_btn}
            onClick={() => handlePageClick(page + 1)}
            disabled={page === totalPages}
            style={{ color: page === totalPages ? "#CCC" : "#23a6f0" }}
          >
            Next
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Pagination;
