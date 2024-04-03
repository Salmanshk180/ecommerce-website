import { Fragment } from "react";
import styles from "./BottomContainer.module.css";
import DesciptionContainer from "../description-container/DescriptionContainer";
import ButtonContainer from "./ButtonContainer";

interface Props {
  src: string;
  identify:string;
}
const BottomContainer = (props: Props) => {
  return (
    <Fragment>
      <div className={styles.bottom_container} id={styles[props.identify]}>
        <div className={styles.img_container}>
        <button className={styles.sale}>Sale</button>
        <img src={props.src} alt="" />
        <ButtonContainer/>
        </div>
        <DesciptionContainer />
      </div>
    </Fragment>
  );
};

export default BottomContainer;
