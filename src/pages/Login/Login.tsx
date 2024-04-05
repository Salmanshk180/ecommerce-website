import React, { FormEvent, useEffect, useState } from "react";
import styles from "./Login.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/Store";
import { login_img_cover } from "../../assets/images";
import { loginUser } from "../../redux/slices/users/login.slices";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+{};:,<.>]).{8,16}$/;
  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    if (!password || !password.trim()) {
      toast.error("Please enter your password.");
      return;
    }
    if (!password.match(passwordRegex)) {
      toast.error(
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be 8-16 characters long."
      );
    }
    try {
      const response = await dispatch(
        loginUser({ email: email, password: password })
      );
      if (response.payload.token) {
        toast.success(response.payload.message);
        document.cookie = `accessToken=${response.payload.token}`;
        navigate("/products");
      }
      if (!response.payload.token) {
        throw new Error(response.payload.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <React.Fragment>
      <div className={styles["login"]}>
        <div className={styles["login-container"]}>
          <div className={styles["form-container"]}>
            <div className={styles["input-container"]}>
              <form onSubmit={handleSignIn}>
                <h1>Sign In</h1>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Your Password"
                />
                <button type="submit">Sign In</button>
                <NavLink to={"/sign-up"}>New User? SignUp</NavLink>
              </form>
            </div>
            <div className={styles["greeting-container"]}>
              <img
                src={login_img_cover}
                alt=""
                className={styles["login-img"]}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
