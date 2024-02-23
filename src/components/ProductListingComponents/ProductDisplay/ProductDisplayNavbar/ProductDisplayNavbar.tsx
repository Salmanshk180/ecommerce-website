import React, { Fragment } from "react";
import styles from "./ProductDisplayNavbar.module.css";
interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
}
const ProductDisplayNavbar = (props:Props) => {
  return (
    <Fragment>
      <div className={styles.navbar}>
        <div className={styles.description}>
          <p className={styles.heading}>Men's Clothing</p>
          <p className={styles.subheading}>Seo text will be here</p>
        </div>
        <div className={styles.sort_container}>
          <p className={styles.sort_text}>Sort By</p>
          <button className={styles.filter_btn} onClick={()=>props.setShow(!props.show)}>Filter By</button>
          <select name="sort" id="sort">
            <option value="Popularity">Popularity</option>
            <option value="Latest">Latest</option>
          </select>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDisplayNavbar;
