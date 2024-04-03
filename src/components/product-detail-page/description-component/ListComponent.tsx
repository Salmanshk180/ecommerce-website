import React from 'react'
import styles from "./ListComponent.module.css"
const ListComponent = () => {
  return (
   <React.Fragment>
    <div className={styles['list-component']}>
        <h5>the quick fox jumps over </h5>
        <ul>
            <li>the quick fox jumps over </li>
            <li>the quick fox jumps over </li>
            <li>the quick fox jumps over </li>
            <li>the quick fox jumps over </li>
        </ul>
    </div>
   </React.Fragment>
  )
}

export default ListComponent