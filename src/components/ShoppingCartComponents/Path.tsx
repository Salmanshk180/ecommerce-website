import React from 'react'
import styles from "./Path.module.css"
const Path = () => {
  return (
    <React.Fragment>
        <div className={styles['path']}>
            <p>Home</p>
            <p>/</p>
            <p className={styles['current']}>Cart</p>
        </div>
    </React.Fragment>
  )
}

export default Path