// CheckBox.tsx
import { Fragment } from "react";
import styles from "./CheckBox.module.css";
import { useDispatch } from "react-redux";

interface Props {
  text: string;
  handleBrand: (text: string) => void; // Function to handle brand selection
}

const CheckBox = (props: Props) => {
  return (
    <Fragment>
      <div className={styles.container}>
        <input
          type="checkbox"
          className={styles.checkbox}
          value={props.text}
          onChange={() => props.handleBrand(props.text)} // Pass text to handleBrand function
        />
        <p>{props.text}</p>
      </div>
    </Fragment>
  );
};

export default CheckBox;
