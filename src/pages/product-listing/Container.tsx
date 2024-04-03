import  { Fragment } from 'react'
import ProductNavbar from '../../components/product-listing-components/product-navbar/ProductNavbar'
import Carousel from '../../components/product-listing-components/carousel/Carousel'

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