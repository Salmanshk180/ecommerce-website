import { Fragment } from 'react'
import styles from "./Image.module.css"

interface Props{
    src: string
}
const Image = (props:Props) => {
  return (
   <Fragment>
        <div className={styles.image_container}>
            <img src={props.src} alt="" />
        </div>
   </Fragment>
  )
}

export default Image