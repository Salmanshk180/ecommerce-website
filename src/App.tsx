import React, { Fragment } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import ProductListing from "./pages/ProductListing/ProductListing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products",
      element: <ProductListing />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
  ]);
  return (
    <Fragment>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Fragment>
  );
}

export default App;
