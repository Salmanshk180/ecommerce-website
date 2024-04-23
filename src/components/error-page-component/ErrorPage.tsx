import { Fragment } from "react";
import styles from "./ErrorPage.module.css";
import { NavLink } from "react-router-dom";
const ErrorPage = () => {
  return (
    <Fragment>
      <div className={styles["error_container"]}>
        <div className={styles["face"]}>
          <div className={styles["eye_container"]}>
            <div className={styles["eye1"]}></div>
            <div className={styles["eye2"]}></div>
          </div>
          <div className={styles["lips"]}></div>
        </div>
        <h1 className={styles["fourzerofour"]}>404</h1>
        <h3>Page not found</h3>
        <p>The page you are looking for doesn't exist!!!</p>
        <button className={styles["back_btn"]}>
          <NavLink to={"../"} style={{ color: "#FFF" }}>
            Go Back
          </NavLink>
        </button>
      </div>
    </Fragment>
  );
};

export default ErrorPage;
