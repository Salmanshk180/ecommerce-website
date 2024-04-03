import React from 'react'
import styles from "./TopBar.module.css"
import { footer_img_1,footer_img_2,footer_img_3 } from '../../../assets/images'
const TopBar = () => {
  return (
    <React.Fragment>
      
         <div className={styles.footer_bar}>
            <div className={styles.footer_logo}>
              <h4>Bandage</h4>
            </div>
            <div className={styles.footer_links}>
              <img src={footer_img_1} alt="" />
              <img src={footer_img_2} alt="" />
              <img src={footer_img_3} alt="" />
            </div>
        
          </div>
    </React.Fragment>
  )
}

export default TopBar