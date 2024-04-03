import { Fragment, useState } from "react";
import styles from "./Carousel.module.css";
import Cards from "../../product-listing-components/carousel/Card";
import { Carousel_1, grater_than_img } from "../../../assets/images";
const data = [{ src: Carousel_1 }, { src: Carousel_1 }];

interface ObjectProps {
  id: string;
  src: string;
  title: string;
  description: string;
  original_price: number;
  price: number;
  showColors: boolean;
  category: string;
  brand: string;
}
interface Props {
  data?: ObjectProps;
}
const Carousel = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const SlideLeft = () => {
    if (currentIndex === data.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex((prevIndex) => prevIndex + 1);
  };
  const SlideRight = () => {
    if (currentIndex === 0) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex((prevIndex) => prevIndex - 1);
  };
  return (
    <Fragment>
      <div className={styles.carousel}>
        <button className={styles.left_btn} onClick={SlideRight}>
          <img src={grater_than_img} className={styles.greater_than} alt="" />
        </button>
        <div className={styles.container}>
          {/* {data.map((card) => (
            <div
              style={{
                transform: `translate(${-currentIndex * 100}%)`,
                transition: "all 1s linear",
              }}
            >
            </div>
          ))} */}
          <Cards src={props.data?.src} />
        </div>
        <button className={styles.right_btn} onClick={SlideLeft}>
          <img src={grater_than_img} className={styles.less_than} alt="" />
        </button>
      </div>
      <div className={styles["img_container"]}>
        <img src={props.data?.src} alt="" width={"20%"}/>
      </div>
    </Fragment>
  );
};

export default Carousel;
