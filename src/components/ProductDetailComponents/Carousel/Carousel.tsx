import { Fragment, useState } from "react";
import styles from "./Carousel.module.css";
import GreaterThan from "../../../assets/GreaterThan.svg";
import Cards from "../../ProductListingComponents/Carousel/Card";
import Carousel1 from "../../../assets/single-product-1-cover-2.svg";

import useBreakpoint from "../../../utils/BreakPoints/useBreakpoints";
const data = [{ src: Carousel1 },{ src: Carousel1 }];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const breakpoint = useBreakpoint();
  const SlideLeft = () => {
    if (currentIndex === data.length-1) {
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
          <img src={GreaterThan} className={styles.greater_than} alt="" />
        </button>
        <div className={styles.container}>
          {data.map((card) => (
            <div
              style={{
                transform: `translate(${-currentIndex * 100}%)`,
                transition: "all 1s linear",        
              }}
            >
              <Cards src={card.src} />
            </div>
          ))}
        </div>
        <button className={styles.right_btn} onClick={SlideLeft}>
          <img src={GreaterThan} className={styles.less_than} alt="" />
        </button>
      </div>
      <div className={styles['img_container']}>
        <img src={Carousel1} alt="" />
        <img src={Carousel1} alt="" />
      </div>
    </Fragment>
  );
};

export default Carousel;
