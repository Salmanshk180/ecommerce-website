import { Fragment } from "react";
import styles from "./BottomText.module.css";

interface Props {
  classname: string;
  text: string;
}
const BottomText = (props: Props) => {
  return (
    <Fragment>
      <div className={styles[props.classname]}>
        <p>{props.text}</p>
      </div>
    </Fragment>
  );
};

export default BottomText;
