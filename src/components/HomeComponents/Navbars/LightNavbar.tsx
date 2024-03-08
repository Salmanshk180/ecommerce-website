import { Fragment, useState } from "react";
// import logo from "../../assets/logo.svg";
import styles from "./LightNavbar.module.css";
import login from "../../../assets/login.svg";
import search from "../../../assets/search.svg";
import cart from "../../../assets/cart.svg";
import likes from "../../../assets/likes.svg";
import togglebtn from "../../../assets/togglebtn.svg";
import { NavLink, useNavigate } from "react-router-dom";
const LightNavbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const navigate = useNavigate();
  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };

  return (
    <Fragment>
      <div className={styles["ligh-navbar"]}>
        <div className={styles["container"]}>
          <div className={styles["logo"]}>
            {/* <img src={logo} alt="logo" className={styles["logo-img"]} /> */}
            <p className={styles["logo-text"]}>
              <NavLink
                to={"/"}
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "#242B52",
                }}
              >
                Bandage
              </NavLink>
            </p>
          </div>
          <div
            className={`${styles["nav-container"]} ${
              navbarVisible ? styles["active"] : ""
            }`}
            id="navbar"
          >
            <div className={styles["nav-links-container"]}>
              <nav className={styles["nav-links"]}>
                <NavLink to="/">Home</NavLink>
                <select
                  className={styles["select-button"]}
                  onChange={(event) => {
                    if (event.target.value == "shop") {
                      navigate("/products");
                    }
                    if (event.target.value == "") {
                      navigate("/");
                    }
                  }}
                >
                  <option value="shop">Shop</option>
                  <option value="shop" selected>
                    Shop
                  </option>
                </select>
                <NavLink to="/about-us">About</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/contact-us">Contact</NavLink>
                <NavLink to="/pages">Pages</NavLink>
              </nav>
            </div>
            <div className={styles["nav-buttons-container"]}>
              <div className={styles["nav-buttons"]}>
                <button className={styles["button"]}>
                  <img src={login} alt="" />
                  <p>
                    <NavLink to={"/sign-in"}>Login</NavLink>/
                    <NavLink to={"/sign-up"}>Register</NavLink>
                  </p>
                </button>
                <button className={styles["button"]}>
                  <img src={search} alt="" />
                </button>
                <button className={styles["button"]}>
                  <img src={cart} alt="" />
                  <p>1</p>
                </button>
                <button className={styles["button"]}>
                  <img src={likes} alt="" />
                  <p>1</p>
                </button>
              </div>
            </div>
          </div>
          <div className={styles["toggle-btn-container"]}>
            <button onClick={toggleNavbar}>
              <img src={togglebtn} alt="" />
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LightNavbar;
