// CheckBox.tsx
import { Fragment } from "react";
import styles from "./CheckBox.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store/Store";
interface Props {
  text: string;
  handleBrand: (text: string) => void; // Function to handle brand selection
}

const CheckBox = (props: Props) => {
  const brands = useSelector((state: RootState) => state.filters.selectedBrands);
  return (
    <Fragment>
      <div className={styles.container}>
        <input
          type="checkbox"
          className={styles.checkbox}
          value={props.text}
          onChange={() => {
            props.handleBrand(props.text);
          }}
          checked={brands?.includes(props.text.toLowerCase() || props.text) ? true : false}
        />
        <p>{props.text}</p>
      </div>
    </Fragment>
  );
};

export default CheckBox;
