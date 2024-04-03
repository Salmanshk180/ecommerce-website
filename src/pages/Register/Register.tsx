import React, { useState, FormEvent, useEffect } from "react";
import styles from "./Register.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { signup_img_cover } from "../../assets/images";
import { signUpUser } from "../../redux/slices/users/signup.slices";
import { AppDispatch } from "../../redux/store/Store";
import { setLoading } from "../../redux/slices/loading/loading";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+{};:,<.>]).{8,16}$/;
  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!firstname || !firstname.trim()) {
      toast.error("Please enter your firstname");
      return;
    }
    if (!lastname || !lastname.trim()) {
      toast.error("Please enter your lastname.");
      return;
    }

    if (!email || !email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    if (!password || !password.trim()) {
      toast.error("Please enter your password");
      return;
    }
    if (!password.match(passwordRegex)) {
      toast.error(
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be 8-16 characters long."
      );
      return;
    }
    try {
      const response = await dispatch(
        signUpUser({
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          role: "user",
        })
      );
      if (response.payload.id) {
        dispatch(setLoading());
        toast.success(response.payload.message);
        navigate("/sign-in");
      }
      if (!response.payload.id) {
        throw new Error(response.payload.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <React.Fragment>
      <div className={styles["register"]}>
        <div className={styles["register-container"]}>
          <div className={styles["form-container"]}>
            <div className={styles["greeting-container"]}>
              <img
                src={signup_img_cover}
                alt=""
                className={styles["signup-img"]}
              />
            </div>
            <div className={styles["input-container"]}>
              <form onSubmit={handleSignUp}>
                <h1>Sign Up</h1>
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder="Enter Your First Name"
                />
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="Enter Your Last Name"
                />
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

                <button type="submit">Sign Up</button>
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
