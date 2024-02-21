import { Fragment } from "react";
import styles from "./BottomSection.module.css";
import BottomContainer from "../BottomContainer/BottomContainer";
import img1 from "../../../../assets/unsplash_75EFpyXu3Wg.svg";
import img2 from "../../../../assets/unsplash_ruJm3dBXCqw.svg";
const BottomSection = () => {
  return (
    <Fragment>
      <div className={styles.bottom_section}>
        <BottomContainer src={img1} identify={"first"} />
        <BottomContainer src={img2} identify={"second"}/>
      </div>
    </Fragment>
  );
};

export default BottomSection;
