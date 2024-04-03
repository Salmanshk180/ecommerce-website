import {Fragment} from 'react'
import styles from "./LoadMoreButton.module.css"
interface Props{
    classname: string;
    text:string;
    src:string;
}
const LoadMoreButton = (props:Props) => {
  return (
    <Fragment>
         <div className={styles[props.classname]}>
          <button>
            <p>{props.text}</p>
            <img src={props.src} alt="" />
          </button>
        </div>
    </Fragment>
  )
}

export default LoadMoreButton