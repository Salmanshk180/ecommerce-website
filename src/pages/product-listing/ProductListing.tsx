import { Fragment } from "react";
import Clients from "../../components/home-components/clients/Clients";
import Container from "./Container";
import MainComponent from "../../components/product-listing-components/main-component/MainComponent";
const ProductListing = () => {
  return (
    <Fragment>
      <div className="">
        <Container />
        <MainComponent />
        <Clients />
      </div>
    </Fragment>
  );
};

export default ProductListing;
