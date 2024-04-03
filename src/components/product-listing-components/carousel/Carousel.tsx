import { Fragment, useState } from "react";
import styles from "./Carousel.module.css";
import Cards from "./Card";
import useBreakpoint from "../../../hooks/breakpoint/useBreakpoints";
import { Carousel_1,Carousel_2,Carousel_3,Carousel_4,Carousel_5 ,grater_than_img } from "../../../assets/images";
const data = [
  { src: Carousel_1, title: "MEN'S CLOTHING", items: 5 },
  { src: Carousel_2, title: "MEN'S CLOTHING", items: 5 },
  { src: Carousel_3, title: "MEN'S CLOTHING", items: 5 },
  { src: Carousel_4, title: "MEN'S CLOTHING", items: 5 },
  { src: Carousel_5, title: "MEN'S CLOTHING", items: 5 },
  { src: Carousel_1, title: "MEN'S CLOTHING", items: 5 },
  { src: Carousel_2, title: "MEN'S CLOTHING", items: 5 },
  { src: Carousel_3, title: "MEN'S CLOTHING", items: 5 },
  { src: Carousel_4, title: "MEN'S CLOTHING", items: 5 },
  { src: Carousel_5, title: "MEN'S CLOTHING", items: 5 },
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
          <img src={grater_than_img} className={styles.greater_than} alt="" />
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
          <img src={grater_than_img} className={styles.less_than} alt="" />
        </button>
      </div>
    </Fragment>
  );
};

export default Carousel;
