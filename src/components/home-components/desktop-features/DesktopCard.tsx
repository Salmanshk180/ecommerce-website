import { Fragment } from "react";
import styles from "./DesktopCard.module.css";
import Image from "../../../UI/ImageComponent/Image";

interface Props {
  src: string;
  title: string;
  description: string;
}
const DesktopCard = (props: Props) => {
  return (
    <Fragment>
      <div className={styles["card"]}>
        <Image src={props.src} />
        <div className={styles["content"]}>
          <h6 className={styles["title"]}>{props.title}</h6>
          <h6 className={styles["description"]}>{props.description}</h6>
        </div>
      </div>
    </Fragment>
  );
};

export default DesktopCard;
