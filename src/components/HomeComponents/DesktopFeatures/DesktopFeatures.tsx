import { Fragment } from "react";
import styles from "./DesktopFeatures.module.css";
import DesktopCard from "./DesktopCard";
import img1 from "../../../assets/bx_bxs-book-reader.svg";
import img2 from "../../../assets/carbon_book.svg";
import img3 from "../../../assets/uil_arrow-growth.svg";
const initialState = [
  {
    src: img1,
    title: "Easy Wins",
    description: "Get your best looking smile now!",
  },
  {
    src: img2,
    title: "Concrete",
    description:
      "Defalcate is most focused in helping you discover your most beautiful smile",
  },
  {
    src: img3,
    title: "Hack Growth",
    description: "Overcame any hurdle or any other problem.",
  },
];
const DesktopFeatures = () => {
  return (
    <Fragment>
      <div className={styles.desktop_features}>
        <div className={styles.container}>
          <div className={styles.top_desc}>
            <h6 className={styles.title_1}>Featured Products</h6>
            <h6 className={styles.title_2}>THE BEST SERVICES</h6>
            <h6 className={styles.title_3}>
              Problems trying to resolve the conflict between{" "}
            </h6>
          </div>
          <div className={styles.img_container}>
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
