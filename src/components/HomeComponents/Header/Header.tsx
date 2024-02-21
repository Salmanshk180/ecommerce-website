import React, { Fragment } from "react";
import DarkNavbar from "../Navbars/DarkNavbar";
import LightNavbar from "../Navbars/LightNavbar";

const Header = () => {
  return (
    <Fragment>
      <DarkNavbar background_color="rgb(5, 26, 71)" />
      <LightNavbar />
    </Fragment>
  );
};

export default Header;
