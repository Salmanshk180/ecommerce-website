import { Fragment } from "react";
import styles from "./DescriptionContainer.module.css";
import Navbar from "../navbar/Navbar";
import BottomText from "../bottom-text/BottomText";
import ImageDescription from "../../../../UI/ImageWithDescription/ImageDescription";
import Color from "../color/Color";
import Price from "../price/Price";
import LoadMoreButton from "../load-more-button/LoadMoreButton";
import { feature_blogs_image_3,feature_blogs_image_4,feature_blogs_image_5,feature_blogs_image_6,feature_blogs_image_7 } from "../../../../assets/images";
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
        <ImageDescription classname="sales" src={feature_blogs_image_3} text="15 Sales" />
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
          <ImageDescription classname="time" src={feature_blogs_image_4} text="22h" />
          <ImageDescription classname="lesson" src={feature_blogs_image_5} text="64 Lesson" />
          <ImageDescription
            classname="progress"
            src={feature_blogs_image_6}
            text="Progress"
          />
        </div>
        <LoadMoreButton
          classname={"load_more_btn"}
          text="Load More"
          src={feature_blogs_image_7}
        />
      </div>
    </Fragment>
  );
};

export default DesciptionContainer;
