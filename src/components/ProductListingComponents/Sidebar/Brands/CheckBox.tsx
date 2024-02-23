import { Fragment } from "react";
import styles from "./CheckBox.module.css";
interface Props {
  text: string;
}
const CheckBox = (props: Props) => {
  return (
    <Fragment>
      <div className={styles.container}>
        <input type="checkbox" className={styles.checkbox} value={props.text} />
        <p>{props.text}</p>
      </div>
    </Fragment>
  );
};

export default CheckBox;
