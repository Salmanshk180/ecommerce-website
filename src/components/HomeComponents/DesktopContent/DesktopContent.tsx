import { Fragment } from "react";
import styles from "./DesktopContent.module.css";
import Image from "./Image";
import { desktop_content_image_1,desktop_content_image_2 } from "../../../assets/images";
const DesktopContent = () => {
  return (
    <Fragment>
      <div className={styles.desktop_content}>
        <div className={styles.container}>
          <div className={styles.img_container}>
            <Image src={desktop_content_image_1} />
            <Image src={desktop_content_image_2} />
          </div>
          <div className={styles.description}>
            <h6 className={styles.title_1}>Featured Products</h6>
            <h6 className={styles.title_2}>We love what we do</h6>
            <h6 className={styles.title_3}>
              <span>
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics.
              </span>
              <span>
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </span>
            </h6>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DesktopContent;
