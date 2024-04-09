import { Fragment, useEffect, useState } from "react";
import styles from "./Carousel.module.css";
import Cards from "./Card";
import useBreakpoint from "../../../hooks/breakpoint/useBreakpoints";
import { grater_than_img } from "../../../assets/images";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store/Store";
import { fetchCategories } from "../../../redux/slices/filter-data/filterData";
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const breakpoint = useBreakpoint();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const categories = useSelector(
    (state: RootState) => state.brandAndCategory.data?.categories
  );

  const SlideLeft = () => {
    if (breakpoint === "md" || breakpoint === "lg") {
      if (currentIndex === categories?.length - 5) {
        return setCurrentIndex(0);
      }
      return setCurrentIndex((prevIndex) => prevIndex + 1);
    }
    if (breakpoint === "xl") {
      if (currentIndex === categories?.length - 6) {
        return setCurrentIndex(0);
      }
      return setCurrentIndex((prevIndex) => prevIndex + 1);
    }
    if (breakpoint === "xs") {
      if (currentIndex === categories?.length - 1) {
        return setCurrentIndex(0);
      }
      return setCurrentIndex((prevIndex) => prevIndex + 1);
    }
    if (breakpoint === "sm") {
      if (currentIndex === categories?.length - 2) {
        return setCurrentIndex(0);
      }
      return setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };
  const SlideRight = () => {
    if (currentIndex === 0) {
      return setCurrentIndex(categories?.length - 5);
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
          {categories?.map((card, index) => (
            <div
              key={index}
              style={{
                transform: `translate(${-currentIndex * 100}%)`,
                transition: "all 1s linear",
              }}
            >
              <Cards
                src={card.images?.toString()}
                title={card.name.toUpperCase()}
              />
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
