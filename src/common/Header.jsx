import React from 'react';
import { NavLink } from 'react-router-dom';

import "../style/header.css";
import SvgPath from "../assets/svg/SvgPath";
import { useSearch } from '../contaxt/SearchFIlterContext';


function Header() {
  const {setsearch} = useSearch()

  function setSerachValue(event){
    setsearch(event.target.value)
    
  }

  return (
    <>
      <header id="upScroll" className="header-section">
        <div className="container">
          <div className="header">
            <NavLink  className="main-logo" to={"/"}>Exclusive</NavLink>
            <ul className="navbar-nav ">
              <li className="nav-item">
              <NavLink  className="nav-link" activeclassname="active" to={"/"}>Home</NavLink>
              </li>
              <li className="nav-item">
              <NavLink  className="nav-link" activeclassname="active" to={"/contact"}>Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className="nav-link" activeclassname="active" to={"/aboutus"}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className="nav-link" activeclassname="active" to={"/signup"}>Sign up</NavLink>
              </li>
            </ul>

            <div className="header-icons-container">
              <form className="search-conatiner">
                <input type="text" onChange={setSerachValue}  className="search-input" placeholder="What are you looking for?" />
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
