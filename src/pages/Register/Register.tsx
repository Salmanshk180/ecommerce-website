import React, { useState, FormEvent } from "react";
import styles from "./Register.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store/Store";
import { addUser } from "../../redux/Slices/users";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!password || !password.trim()) {
      setError("Please enter your password.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    dispatch(addUser({ email:email, password:password}))
    setTimeout(() => {
      navigate("/sign-in");
    }, 3000);
  };

  return (
    <React.Fragment>
      <div className={styles["register"]}>
        <div className={styles["register-container"]}>
          <div className={styles["form-container"]}>
            <div className={styles["greeting-container"]}>
              <div>
                <h1>Register !!!</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias reiciendis ad soluta sequi pariatur perspiciatis
                  vero excepturi incidunt obcaecati harum.
                </p>
              </div>
            </div>
            <div className={styles["input-container"]}>
              <form onSubmit={handleSignUp}>
                <h1>Sign Up</h1>
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
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                />
                <button type="submit">Sign Up</button>
                {error && <p className={styles["error"]}>{error}</p>}
                <NavLink to="/sign-in">Already have an Account? SignIn</NavLink>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
