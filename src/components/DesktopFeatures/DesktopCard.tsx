import { Fragment } from "react";
import styles from "./DesktopCard.module.css";

interface Props {
  src: string;
  title: string;
  description: string;
}
const DesktopCard = (props: Props) => {
  return (
    <Fragment>
      <div className={styles.card}>
        <img src={props.src} alt="" />
        <div className={styles.content}>
          <h6 className={styles.title}>{props.title}</h6>
          <h6 className={styles.description}>{props.description}</h6>
        </div>
      </div>
    </Fragment>
  );
};

export default DesktopCard;
