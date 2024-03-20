import  { Fragment } from 'react'
import styles from "./Navbar.module.css"
import { star_img } from '../../../../assets/images';
const Navbar = () => {
  return (
    <Fragment>
   <div className={styles.navbar}>
          <h6 className={styles.nav_title}>English Department</h6>
          <div className={styles.rating_card}>
            <img src={star_img} alt="" />
            <p>4.9</p>
          </div>
        </div>
    </Fragment>
  )
}

export default Navbar