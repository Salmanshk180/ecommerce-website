import { Fragment } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import ProductListing from "./pages/product-listing/ProductListing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Layout from "./layout/Layout";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ProtectedRoute from "./layout/protected-route/ProtectedRoute";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/sign-in",
          element: <Login />,
        },
        {
          path: "/sign-up",
          element: <Register />,
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
          path: "/products/:id",
          element: <ProductDetail />,
        },
        {
          path: "/shopping-cart",
          element: <ProtectedRoute element={ShoppingCart} />,
        },
      ],
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
