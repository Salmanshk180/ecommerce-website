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
import { getUser, logout } from "../../../../redux/slices/users/users";
import { toast } from "react-toastify";
const LightNavbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const isLoggedin = useSelector(
    (state: RootState) => state.users.LoggedInUser
  );
  const LoggedInUser = useSelector(
    (state: RootState) => state.users.LoggedInUser
  );
  const cartProducts = useSelector(
    (state: RootState) => state.cartProducts.cartData
  );
  const user = useSelector((state: RootState) => state.users.user);

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
            <p className={styles["logo-text"]}>
              <NavLink to={"/"} style={{ color: "black" }}>
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
                <NavLink to="#">
                  <button
                    onClick={() => setShowShop(!showShop)}
                    style={{
                      position: "relative",
                      width: "100px",
                      background: "transparent",
                      border: "none",
                      fontSize: "16px",
                    }}
                  >
                    Shop
                    {showShop && (
                      <div
                        style={{
                          position: "absolute",
                          backgroundColor: "#fefefe",
                          width: "100%",
                          padding: "10px 0px 0px 0px",
                          margin: "auto",
                          top: "120%",
                          borderRadius: "10px 10px 10px 10px",
                        }}
                      >
                        <div
                          style={{
                            border: "1px solid #ccc",
                            borderRadius: "10px",
                            width: "100%",
                            padding: "0px 0px",
                          }}
                        >
                          <button
                            id={styles["options"]}
                            style={{
                              borderRadius: "10px 10px 0px 0px",
                            }}
                            className={styles["button"]}
                            onClick={() => {
                              navigate(`products`);
                            }}
                          >
                            Shop
                          </button>

                          <button
                            id={styles["options"]}
                            className={styles["button"]}
                            style={{
                              borderRadius: "0px 0px 10px 10px",
                            }}
                            onClick={() => {
                              navigate("/products");
                            }}
                          >
                            Shop
                          </button>
                        </div>
                      </div>
                    )}
                  </button>
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
                  <>
                   <button
                      className={styles["button"]}
                      onClick={() => setShowDropdown(!showDropdown)}
                      style={{ position: "relative", width: "100px" }}
                    >
                      Profile
                     {showDropdown && (
                       <div
                       style={{
                         position: "absolute",
                         backgroundColor: "#fefefe",
                         width: "100%",
                         padding: "10px 0px 0px 0px",
                         margin: "auto",
                         top: "120%",
                    }}
                  >
                    <div
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        width: "100%",
                        padding: "0px 0px",
                      }}
                      >
                      
                    <button
                      id={styles["options"]}
                      style={{
                        borderRadius: "10px 10px 0px 0px",
                      }}
                      className={styles["button"]}
                      onClick={() => {
                        dispatch(getUser(LoggedInUser!));
                        navigate(`/profile/${user?.id}`);
                      }}
                      >
                      Profile
                    </button>
                    <button
                      id={styles["options"]}
                      className={styles["button"]}
                      onClick={() => {
                        dispatch(getUser(LoggedInUser!));
                        navigate(`/order-history`);
                      }}
                      >
                      Order History
                    </button>
                    <button
                      id={styles["options"]}
                      className={styles["button"]}
                      style={{
                        borderRadius: "0px 0px 10px 10px",
                      }}
                      onClick={() => {
                        dispatch(logout());
                        localStorage.removeItem("accessToken");
                        document.cookie = `accessToken=null`;
                        navigate("/");
                        toast.success("Logout Successfull");
                      }}
                      >
                      Logout
                    </button>
                    </div>
                  </div>
                )}
                </button>
                  </>
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
                <button
                  className={styles["button"]}
                  onClick={() => {
                    if (!LoggedInUser) {
                      toast.error("You must be logged in");
                    } else {
                      navigate("/shopping-cart");
                    }
                  }}
                >
                  <img src={cart_img} alt="" />
                  <p>{cartProducts?.length}</p>
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
