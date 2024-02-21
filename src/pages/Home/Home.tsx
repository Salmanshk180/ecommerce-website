import React, { Fragment } from "react";
import Header from "../../components/HomeComponents/Header/Header";
import ShopHeader from "../../components/HomeComponents/ShopHeader/ShopHeader";
import Clients from "../../components/HomeComponents/clients/Clients";
import ShoppingCard from "../../components/HomeComponents/ShoppingCards/ShoppingCard";
import Footer from "../../components/HomeComponents/Footer/Footer";
import ProductCards from "../../components/HomeComponents/ProductCards/ProductCards";
import DesktopContent from "../../components/HomeComponents/DesktopContent/DesktopContent";
import DesktopFeatures from "../../components/HomeComponents/DesktopFeatures/DesktopFeatures";
import FeatureBlogs from "../../components/HomeComponents/FeatureBlogs/FeatureBlogs";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <ShopHeader />
      <Clients />
      <ShoppingCard />
      <ProductCards />
      <DesktopContent />
      <DesktopFeatures />
      <FeatureBlogs />
      <Footer />
    </Fragment>
  );
};

export default Home;
