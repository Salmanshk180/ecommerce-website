import { Fragment } from "react";
import styles from "./UpperSection.module.css";
const UpperSection = () => {
  return (
    <Fragment>
      <div className={styles.upper_section}>
        <h6 className={styles.subheading}>Practice Advice</h6>
        <h6 className={styles.heading}>Featured Posts</h6>
      </div>
    </Fragment>
  );
};

export default UpperSection;
