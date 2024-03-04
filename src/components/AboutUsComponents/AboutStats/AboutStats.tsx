import React from 'react'
import styles from "./AboutStats.module.css"
import Statisitc from './Statisitc'
const AboutStats = () => {
  return (
   <React.Fragment>
    <div className={styles['about-stats']}>
    <div className={styles['container']}>
        <Statisitc StatsNumber='15k' StatsText='Happy Customer'/>
        <Statisitc StatsNumber='150k' StatsText='Monthly Visitor'/>
        <Statisitc StatsNumber='15' StatsText='Countries Worldwide'/>
        <Statisitc StatsNumber='100+' StatsText='Top Partners'/>
    </div>
    </div>
   </React.Fragment>
  )
}

export default AboutStats