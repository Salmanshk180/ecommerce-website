import { Fragment } from "react";
import styles from "./DesktopContent.module.css";
import image1 from "../../assets/unsplash_Lks7vei-eAg.svg";
import image2 from "../../assets/unsplash_Lks7vei-eAg (1).svg";
import Image from "./Image";

const DesktopContent = () => {
  return (
    <Fragment>
      <div className={styles.desktop_content}>
        <div className={styles.container}>
          <div className={styles.img_container}>
            <Image src={image1} />
            <Image src={image2} />
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
