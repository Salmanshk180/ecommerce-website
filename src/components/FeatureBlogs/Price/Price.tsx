import  { Fragment } from 'react'
import styles from "./Price.module.css"
interface Props{
 container:string;
 original:string;
 discount:string;
}
const Price = (props:Props) => {
  return (
    <Fragment>
   <div className={styles[props.container]}>
          <p className={styles[props.original]}>$16.48</p>
          <p className={styles[props.discount]}>$6.48</p>
        </div>
    </Fragment>
  )
}

export default Price