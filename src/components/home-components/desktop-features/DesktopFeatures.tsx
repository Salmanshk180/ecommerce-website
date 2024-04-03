import { Fragment } from "react";
import styles from "./DesktopFeatures.module.css";
import DesktopCard from "./DesktopCard";
import {
  desktop_features_image_1,
  desktop_features_image_2,
  desktop_features_image_3,
} from "../../../assets/images/index";
const initialState = [
  {
    src: desktop_features_image_1,
    title: "Easy Wins",
    description: "Get your best looking smile now!",
  },
  {
    src: desktop_features_image_2,
    title: "Concrete",
    description:
      "Defalcate is most focused in helping you discover your most beautiful smile",
  },
  {
    src: desktop_features_image_3,
    title: "Hack Growth",
    description: "Overcame any hurdle or any other problem.",
  },
];
const DesktopFeatures = () => {
  return (
    <Fragment>
      <div className={styles["desktop_features"]}>
        <div className={styles["container"]}>
          <div className={styles["top_desc"]}>
            <h6 className={styles["title_1"]}>Featured Products</h6>
            <h6 className={styles["title_2"]}>THE BEST SERVICES</h6>
            <h6 className={styles["title_3"]}>
              Problems trying to resolve the conflict between
            </h6>
          </div>
          <div className={styles["img_container"]}>
            {initialState.map((data) => (
              <DesktopCard
                src={data.src}
                title={data.title}
                description={data.description}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DesktopFeatures;
