import React from 'react'
import styles from "./AboutUs.module.css"
import LightNavbar from '../../components/HomeComponents/Navbars/LightNavbar'
import AboutHeader from '../../components/AboutUsComponents/AboutHeader/AboutHeader'
import Footer from '../../components/HomeComponents/Footer/Footer'
const AboutUs = () => {
  return (
    <React.Fragment>
        <div className={styles['about-us']}>
        <div className={styles['container']}>
            <LightNavbar/>
            <AboutHeader/>
            <Footer/>
        </div>
        </div>
    </React.Fragment>
  )
}

export default AboutUs