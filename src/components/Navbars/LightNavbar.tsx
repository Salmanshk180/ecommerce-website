import React, { Fragment, useState } from "react";
import logo from "../../assets/logo.svg";
import styles from "./LightNavbar.module.css";
import login from "../../assets/login.svg";
import search from "../../assets/search.svg";
import cart from "../../assets/cart.svg";
import likes from "../../assets/likes.svg";
import togglebtn from "../../assets/togglebtn.svg";
const LightNavbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };

  return (
    <Fragment>
      <div className={styles["ligh-navbar"]}>
        <div className={styles["container"]}>
          <div className={styles["logo"]}>
            {/* <img src={logo} alt="logo" className={styles["logo-img"]} /> */}
            <p className={styles["logo-text"]}>Bandage</p>
          </div>
          <div
            className={`${styles["nav-container"]} ${
              navbarVisible ? styles["active"] : ""
            }`}
            id="navbar"
          >
            <div className={styles["nav-links-container"]}>
              <nav className={styles["nav-links"]}>
                <a href="#">Home</a>
                <a href="#">
                  <select className={styles["select-button"]}>
                    <option value="shop">Shop</option>
                  </select>
                </a>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
                <a href="#">Pages</a>
              </nav>
            </div>
            <div className={styles["nav-buttons-container"]}>
              <div className={styles["nav-buttons"]}>
                <button className={styles["button"]}>
                  <img src={login} alt="" />
                  <p>Login / Register</p>
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
