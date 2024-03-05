import React from 'react'
import styles from "./TopBar.module.css"
const TopBar = () => {
  return (
   <React.Fragment>
    <div className={styles['top-bar']}>
        <p>Description</p>
        <p>Additional Information</p>
        <p>Reviews(0)</p>
    </div>
    <hr />
   </React.Fragment>
  )
}

export default TopBar