import React, { Fragment } from 'react'
import DarkNavbar from '../Navbars/DarkNavbar'
import LightNavbar from '../Navbars/LightNavbar'

const Header = () => {
  return (
   <Fragment>
    <DarkNavbar/>
    <LightNavbar/>
   </Fragment>
  )
}

export default Header