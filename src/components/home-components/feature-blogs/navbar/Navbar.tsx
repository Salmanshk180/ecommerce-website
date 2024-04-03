import { Fragment } from "react";
import styles from "./Navbar.module.css";
import { feature_blogs_image_8 } from "../../../../assets/images";
const Navbar = () => {
  return (
    <Fragment>
      <div className={styles.navbar}>
        <h6 className={styles.nav_title}>English Department</h6>
        <div className={styles.rating_card}>
          <img src={feature_blogs_image_8} alt="" />
          <p>4.9</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
