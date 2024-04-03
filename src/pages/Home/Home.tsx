import React from 'react'
import ShopHeader from '../../components/home-components/shop-header/ShopHeader'
import Clients from '../../components/home-components/clients/Clients'
import ShoppingCard from '../../components/home-components/shopping-cards/ShoppingCard'
import DesktopContent from '../../components/home-components/desktop-content/DesktopContent'
import DesktopFeatures from '../../components/home-components/desktop-features/DesktopFeatures'
import FeatureBlogs from '../../components/home-components/feature-blogs/FeatureBlogs'
import ProductCards from '../../components/home-components/product-cards/ProductCards'

const Home = () => {
  return (
    <React.Fragment>
       <ShopHeader/>
       <Clients/>
       <ShoppingCard/>
       <ProductCards/>
       <DesktopContent/>
       <DesktopFeatures/>
       <FeatureBlogs/>
    </React.Fragment>
  )
}

export default Home