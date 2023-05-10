import React, { useState } from "react";
import "./login.css";
import back from "../../assets/images/my-account.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";
import Validation from "./Validation";

function Login() {
  const [values, setValues] = useState({
    values: {
      name: "",
      Password: "",
    },
  });

  const [errors, setError] = useState({});

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      dispatch(authActions.login());
    }
  };

  const handleNameChanging = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });

    setError(Validation(values));
  };

  return (
    <>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>Login</h3>
              <h1>My Account</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <span>Username or Email address</span>
            <input
              type="text"
              name="name"
              required
              onChange={handleNameChanging}
              value={values.name}
            />
            {errors.name && (
              <p
                style={{ color: "red", fontSize: "13px", marginBottom: "10px" }}
              >
                {errors.name}
              </p>
            )}
            <span>Password *</span>
            <input
              type="password"
              required
              name="password"
              onChange={handleNameChanging}
              value={values.Password}
            />
            {errors.password && (
              <p
                style={{ color: "red", fontSize: "13px", marginBottom: "10px" }}
              >
                {errors.password}
              </p>
            )}
            <button className="button">Log in</button>

            {/* <Link to="/register">Signup</Link> */}
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
