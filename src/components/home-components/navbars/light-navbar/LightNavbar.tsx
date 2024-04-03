import React, { useState } from "react";
import styles from "./LightNavbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  login_img,
  search_img,
  cart_img,
  likes_img,
  toggle_btn_img,
} from "../../../../assets/images";
import { AppDispatch, RootState } from "../../../../redux/store/Store";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../redux/slices/users/users";
import { toast } from "react-toastify";
import { setLoading } from "../../../../redux/slices/loading/loading";
const LightNavbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const isLoggedin = useSelector(
    (state: RootState) => state.users.LoggedInUser
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };

  return (
    <React.Fragment>
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
                <NavLink to="/">Home</NavLink>
                <NavLink to="#">
                  <select
                    defaultValue={"shop"}
                    className={styles["select-button"]}
                    onChange={(event) => {
                      if (event.target.value === "shop") {
                        navigate("/products");
                      }
                      if (event.target.value === "") {
                        navigate("/");
                      }
                    }}
                  >
                    <option value="shop">Shop</option>
                    <option value="shop">Shop</option>
                  </select>
                </NavLink>
                <NavLink to="/about-us">About</NavLink>
                <NavLink to="/blogs">Blog</NavLink>
                <NavLink to="/contact-us">Contact</NavLink>
                <NavLink to="/pages">Pages</NavLink>
              </nav>
            </div>
            <div className={styles["nav-buttons-container"]}>
              <div className={styles["nav-buttons"]}>
                {isLoggedin ? (
                  <button
                    className={styles["button"]}
                    onClick={() => {
                      dispatch(logout());
                      navigate("/");
                      toast.success("Logout Successfull");
                    }}
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <p>
                      <button className={styles["button"]}>
                        <img src={login_img} alt="" />
                        <NavLink to={"/sign-in"}>Login</NavLink>/
                        <NavLink to={"/sign-up"}>Register</NavLink>
                      </button>
                    </p>
                  </>
                )}
                <button className={styles["button"]}>
                  <img src={search_img} alt="" />
                </button>
                <button className={styles["button"]}>
                  <img src={cart_img} alt="" />
                  <p>1</p>
                </button>
                <button className={styles["button"]}>
                  <img src={likes_img} alt="" />
                  <p>1</p>
                </button>
              </div>
            </div>
          </div>
          <div className={styles["toggle-btn-container"]}>
            <button onClick={toggleNavbar}>
              <img src={toggle_btn_img} alt="" />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LightNavbar;
