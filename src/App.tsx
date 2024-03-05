import React, { Fragment } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import ProductListing from "./pages/ProductListing/ProductListing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Layout from "./layout/Layout";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/products",
          element: <ProductListing />,
        },
        {
          path: "/shopping-cart",
          element: <ShoppingCart />,
        },
        {
          path: "/product-detail",
          element: <ProductDetail />,
        },
      ],
    },
    // {
    //   path: "/products",
    //   element: <ProductListing />,
    // },
    // {
    //   path: "/about-us",
    //   element: <AboutUs />,
    // },
    // {
    //   path: "/contact-us",
    //   element: <ContactUs />,
    // },
    // {
    //   path: "/shopping-cart",
    //   element: <ShoppingCart />,
    // },
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
