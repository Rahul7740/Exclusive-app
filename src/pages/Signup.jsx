import React from "react";
import { Link } from "react-router-dom";
import "../style/Signup.css";
import SvgPath from "../assets/svg/SvgPath";
import ImgPath from "../assets/images/ImgPath";

const Signup = () => {
  return (
    <>
      <section className="all-section">
        <div className="container">
          <div className="direction-container">
            <Link to={"/"}>Home</Link>/<Link to={"/Signup"}>Singup</Link>
          </div>
          <div className="signup-container">
            <img src={ImgPath.signUp} />
            <div className="signup">
              <div className="signup-head">
                <h2>Create an account</h2>
                <p>Enter your details below</p>
              </div>
              <form className="signUp-form">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email or Phone Number" />
                <input type="password" placeholder="Password" />
                <button type="submit" className="signup-btns createAC-btn">
                  Create Account
                </button>
              </form>
              <button className="signup-btns">
                  <img src={SvgPath.googleIcon} alt="google-icon" />
                  <p>Sign up with Google</p>
              </button>
              <div className="alreadyAc">Already have account? <Link className="signUp-to-login-btn" to={'/login'}>Log in</Link></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
