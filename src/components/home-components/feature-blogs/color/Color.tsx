import { Fragment } from 'react'
import styles from "./Color.module.css"
interface Props{
    classname: string;
}
const Color = (props:Props) => {
  return (
    <Fragment>
        <div className={styles[props.classname]}>  
        </div>
    </Fragment>
  )
}

export default Color