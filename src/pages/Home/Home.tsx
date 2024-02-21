import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import ShopHeader from "../../components/ShopHeader/ShopHeader";
import Clients from "../../components/clients/Clients";
import ShoppingCard from "../../components/ShoppingCards/ShoppingCard";
import Footer from "../../components/Footer/Footer";
import ProductCards from "../../components/ProductCards/ProductCards";
import DesktopContent from "../../components/DesktopContent/DesktopContent";
import DesktopFeatures from "../../components/DesktopFeatures/DesktopFeatures";
import FeatureBlogs from "../../components/FeatureBlogs/FeatureBlogs";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <ShopHeader />
      <Clients />
      <ShoppingCard />
      <ProductCards />
      <DesktopContent/>
      <DesktopFeatures/>
      <FeatureBlogs/>
      <Footer />
    </Fragment>
  );
};

export default Home;
