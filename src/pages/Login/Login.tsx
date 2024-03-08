import React, { FormEvent, useState } from "react";
import styles from "./Login.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store/Store";
import { login, logout } from "../../redux/Slices/users";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const message = useSelector((state: RootState) => state.users.isLoggedin);
  console.log(message);

  const dispatch = useDispatch();
  const handleSignIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!password || !password.trim()) {
      setError("Please enter your password.");
      return;
    }
    dispatch(login({ email: email, password: password }));
    if (message == true) {
      setTimeout(() => {
        navigate("/products");
      }, 3000);
    }
    if (message == false) {
      setError("Check your credentials");
      console.log("User not found");
      return;
    }
    setError("");
    dispatch(logout());
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
                {error && <p className={styles["error"]}>{error}</p>}
                <button type="submit">Sign In</button>
                <NavLink to={"/sign-up"}>New User? SignUp</NavLink>
              </form>
            </div>
            <div className={styles["greeting-container"]}>
              <div>
                <h1>Welcome Back !!!</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias reiciendis ad soluta sequi pariatur perspiciatis
                  vero excepturi incidunt obcaecati harum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
