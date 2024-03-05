import React from 'react'
import styles from "./Path.module.css"

interface Props{
  currentPath: string;
}
const Path = (props:Props) => {
  return (
    <React.Fragment>
        <div className={styles['path']}>
            <p>Home</p>
            <p>/</p>
            <p className={styles['current']}>{props.currentPath}</p>
        </div>
    </React.Fragment>
  )
}

export default Path