import { Fragment } from "react";
import styles from "./DescriptionContainer.module.css";
import download from "../../../assets/Frame.svg";
import clock from "../../../assets/icon akar-icons-calendar.svg";
import progress from "../../../assets/icon ant-design-area-chart-outlined.svg";
import lesson from "../../../assets/icon carbon-chart-area-smooth.svg";
import load_more from "../../../assets/icn arrow-right .icn-xs.svg";
import Navbar from "../Navbar/Navbar";
import BottomText from "../BottomText/BottomText";
import ImageDescription from "../ImageDescription/ImageDescription";
import Color from "../Color/Color";
import Price from "../Price/Price";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
const DesciptionContainer = () => {
  return (
    <Fragment>
      <div className={styles.des_container}>
        <Navbar />
        <BottomText classname={"bottom_title"} text={"Graphic Design"} />
        <BottomText
          classname={"bottom_desc"}
          text={
            " We focus on ergonomics and meeting you where you work. It's only a keystroke away."
          }
        />
        <ImageDescription classname="sales" src={download} text="15 Sales" />
        <Price
          container="price_container"
          original="original_price"
          discount="discouny_price"
        />
        <div className={styles.color_container}>
          <Color classname="first_color" />
          <Color classname="second_color" />
          <Color classname="third_color" />
          <Color classname="fourth_color" />
        </div>
        <div className={styles.static_container}>
          <ImageDescription classname="time" src={clock} text="22h" />
          <ImageDescription classname="lesson" src={lesson} text="64 Lesson" />
          <ImageDescription
            classname="progress"
            src={progress}
            text="Progress"
          />
        </div>
        <LoadMoreButton
          classname={"load_more_btn"}
          text="Load More"
          src={load_more}
        />
      </div>
    </Fragment>
  );
};

export default DesciptionContainer;
