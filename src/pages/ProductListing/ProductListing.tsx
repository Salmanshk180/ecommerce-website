import { Fragment } from 'react'
import DarkNavbar from '../../components/HomeComponents/Navbars/DarkNavbar'
import LightNavbar from '../../components/HomeComponents/Navbars/LightNavbar'
import Footer from '../../components/HomeComponents/Footer/Footer'
import Clients from '../../components/HomeComponents/clients/Clients'
const ProductListing = () => {
  return (
    <Fragment>
        <div className=''>
            <DarkNavbar background_color='#23856D'/>
            <LightNavbar/>
        <Clients/>
        <Footer/>
        </div>
    </Fragment>
  )
}

export default ProductListing