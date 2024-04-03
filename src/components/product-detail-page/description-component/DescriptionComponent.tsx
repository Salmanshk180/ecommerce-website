import React from 'react'
import styles from "./DescriptionComponent.module.css"
import TopBar from './TopBar'
import MainComponent from './MainComponent'
const DescriptionComponent = () => {
  return (
    <React.Fragment>
        <div className={styles['description-component']}>
            <TopBar/>
            <MainComponent/>
        </div>
    </React.Fragment>
  )
}

export default DescriptionComponent