import React from "react";
import "./login.styles.css";
import logo from "../../../assets/img/Logo.png";

const Login = () => {
  return (
    <>
      <div className="register">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="register_box login">
          <div className="register_form_content">
            <h3>Sign in</h3>
            <p>Sign in to continue your challenge </p>
          </div>

          <div className="login_form">
            <form action="">
              <div className="login_flex">
              <input type="email" placeholder="Email" name="email" />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="password"
                />
              </div>
            </form>
            <button className="register_btn">Sign In</button>
          </div>
          <p className="footer-p">Don't have an account?</p>
          <a href="/sign-up" className="sign-in-link">
            Sign up <span className="arrow">&rarr;</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
