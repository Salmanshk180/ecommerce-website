import { Fragment } from "react";
import styles from "./BottomSection.module.css";
import BottomContainer from "../bottom-container/BottomContainer";
import { feature_blogs_image_1,feature_blogs_image_2 } from "../../../../assets/images";
const BottomSection = () => {
  return (
    <Fragment>
      <div className={styles.bottom_section}>
        <BottomContainer src={feature_blogs_image_1} identify={"first"} />
        <BottomContainer src={feature_blogs_image_2} identify={"second"}/>
      </div>
    </Fragment>
  );
};

export default BottomSection;
