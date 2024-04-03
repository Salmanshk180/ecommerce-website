import { Fragment } from "react";
import styles from "./FeatureBlogs.module.css";
import UpperSection from "./upper-section/UpperSection";
import BottomSection from "./bottom-section/BottomSection";
const FeatureBlogs = () => {
  return (
    <Fragment>
      <div className={styles.feature_blogs}>
        <div className={styles.container}>
            <UpperSection/>
            <BottomSection/>
        </div>
      </div>
    </Fragment>
  );
};

export default FeatureBlogs;
