import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import ShopHeader from "../../components/ShopHeader/ShopHeader";
import Clients from "../../components/clients/Clients";
import ShoppingCard from "../../components/ShoppingCards/ShoppingCard";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <ShopHeader />
      <Clients />
      <ShoppingCard />
      <Footer />
    </Fragment>
  );
};

export default Home;
