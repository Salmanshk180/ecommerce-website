import  { Fragment } from 'react'
import ProductNavbar from '../../components/ProductListingComponents/ProductNavbar/ProductNavbar'
import Carousel from '../../components/ProductListingComponents/Carousel/Carousel'

const Container = () => {
  return (
   <Fragment>
        <div>
            <ProductNavbar/>
            <Carousel/>
        </div>
   </Fragment>
  )
}

export default Container