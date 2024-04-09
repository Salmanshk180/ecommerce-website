import { Fragment } from "react";
import styles from "./Card.module.css";
import { useDispatch } from "react-redux";
import { addCategory } from "../../../redux/slices/filters/filters.slices";
interface Props {
  src?: string;
  title?: string;
}
const Card = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div
        className={styles.card}
        onClick={() => {
          dispatch(addCategory({ category: props.title }));
        }}
      >
        <img src={props.src} alt="" />
        <div className={styles.description}>
          <p>{props.title}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
