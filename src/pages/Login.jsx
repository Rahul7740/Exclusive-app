import React from "react";
import { Link } from "react-router-dom";
import "../style/Signup.css";
import SvgPath from "../assets/svg/SvgPath";
import ImgPath from "../assets/images/ImgPath";

const Login = () => {
  return (
    <>
      <section className="all-section">
        <div className="container">
          <div className="direction-container">
            <Link to={"/"}>Home</Link>/<Link to={"/Signup"}>Singup</Link>/
            <Link to={"/Signup/Login"}>login</Link>
          </div>
          <div className="signup-container">
            <img src={ImgPath.signUp} />
            <div className="signup">
              <div className="signup-head">
                <h2>Log in to Exclusive</h2>
                <p>Enter your details below</p>
              </div>
              <form className="signUp-form">
                <input type="text" placeholder="Email or Phone Number" />
                <input type="password" placeholder="Password" />
                <div className="login-btn-container">
                  <button
                    type="submit"
                    className="login-btn"
                  >
                    Log in
                  </button>
                  <a className="forget-btn" href="">Forget Password?</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
