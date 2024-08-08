import React from 'react';
import { NavLink } from 'react-router-dom';

import "../style/header.css";
import SvgPath from "../assets/svg/SvgPath";
import { Link } from "react-router-dom";


function Header() {

  return (
    <>
      <header id="upScroll" className="header-section">
        <div className="container">
          <div className="header">
            <NavLink  className="main-logo" to={"/"}>Exclusive</NavLink>
            <ul className="navbar-nav ">
              <li className="nav-item">
              <NavLink  className="nav-link" activeClassName="active" to={"/"}>Home</NavLink>
              </li>
              <li className="nav-item">
              <NavLink  className="nav-link" activeClassName="active" to={"/contact"}>Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className="nav-link" activeClassName="active" to={"/aboutus"}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className="nav-link" activeClassName="active" to={"/signup"}>Sign up</NavLink>
              </li>
            </ul>

            <div className="header-icons-container">
              <form className="search-conatiner">
                <input type="text" className="search-input" placeholder="What are you looking for?" />
                <button type='submit' className="search-btn"><img src={SvgPath.searchIcon} alt="search" /></button>
              </form>
              <div className="shop-icon-container">
                <button><img src={SvgPath.heart} /></button>
                <button><img src={SvgPath.shopIcon} /></button>
              </div>
            </div>
          </div>
        </div>
      </header>
      
    </>
  );
}

export default Header;
