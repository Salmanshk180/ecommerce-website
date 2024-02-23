import { Fragment, useState } from "react";
import styles from "./Carousel.module.css";
import GreaterThan from "../../../assets/GreaterThan.svg";
import Cards from "./Card";
import Carousel1 from "../../../assets/Carousel_1.svg";
import Carousel2 from "../../../assets/Carousel2.svg";
import Carousel3 from "../../../assets/Carousel3.svg";
import Carousel4 from "../../../assets/Carousel4.svg";
import Carousel5 from "../../../assets/Carousel5.svg";
import useBreakpoint from "../../../utils/BreakPoints/useBreakpoints";
const data = [
  { src: Carousel1, title: "MEN'S CLOTHING", items: 5 },
  { src: Carousel2, title: "MEN'S CLOTHING", items: 5 },
  { src: Carousel3, title: "MEN'S CLOTHING", items: 5 },
  { src: Carousel4, title: "MEN'S CLOTHING", items: 5 },
  { src: Carousel5, title: "MEN'S CLOTHING", items: 5 },
  { src: Carousel1, title: "MEN'S CLOTHING", items: 5 },
  { src: Carousel2, title: "MEN'S CLOTHING", items: 5 },
  { src: Carousel3, title: "MEN'S CLOTHING", items: 5 },
  { src: Carousel4, title: "MEN'S CLOTHING", items: 5 },
  { src: Carousel5, title: "MEN'S CLOTHING", items: 5 },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const breakpoint = useBreakpoint();
  const SlideLeft = () => {
    if (breakpoint === "md" || breakpoint === "lg") {
      if (currentIndex === data.length - 5) {
        return setCurrentIndex(0);
      }
      return setCurrentIndex((prevIndex) => prevIndex + 1);
    }
    if (breakpoint === "xl") {
      if (currentIndex === data.length - 6) {
        return setCurrentIndex(0);
      }
      return setCurrentIndex((prevIndex) => prevIndex + 1);
    }
    if (breakpoint === "xs") {
      if (currentIndex === data.length - 1) {
        return setCurrentIndex(0);
      }
      return setCurrentIndex((prevIndex) => prevIndex + 1);
    }
    if (breakpoint === "sm") {
      if (currentIndex === data.length - 2) {
        return setCurrentIndex(0);
      }
      return setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };
  const SlideRight = () => {
    if (currentIndex === 0) {
      return setCurrentIndex(data.length - 5);
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
              <Cards src={card.src} title={card.title} items={card.items} />
            </div>
          ))}
        </div>
        <button className={styles.right_btn} onClick={SlideLeft}>
          <img src={GreaterThan} className={styles.less_than} alt="" />
        </button>
      </div>
    </Fragment>
  );
};

export default Carousel;
