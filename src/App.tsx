import React, { Fragment } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import ProductListing from "./pages/ProductListing/ProductListing";


function App() {
  return (
    <Fragment>
      <div className="App">
        {/* <Home/> */}
        <ProductListing />
      </div>
    </Fragment>
  );
}

export default App;
