import { Fragment } from "react";
import styles from "./ImageDescription.module.css"

interface Props{
    classname: string;
    src:string;
    text:string;
}
const ImageDescription = (props:Props) => {
  return (
    <Fragment>
      <div className={styles[props.classname]}>
        <img src={props.src} alt="" />
        <p>{props.text}</p>
      </div>
    </Fragment>
  );
};

export default ImageDescription;
