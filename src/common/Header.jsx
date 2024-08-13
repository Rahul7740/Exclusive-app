import React from "react";
import { NavLink } from "react-router-dom";

import "../style/header.css";
import SvgPath from "../assets/svg/SvgPath";
import { useSearch } from "../contaxt/SearchFIlterContext";

import menuLinks from "../json/menuLinks.json";
function Header() {
  const { setsearch } = useSearch();

  function setSerachValue(event) {
    setsearch(event.target.value);
  }

  return (
    <>
      <header id="upScroll" className="header-section">
        <div className="container">
          <div className="header">
            <NavLink className="main-logo" to={"/"}>
              Exclusive
            </NavLink>
            <ul className="navbar-nav ">
              {menuLinks.map((i, index) => (
                <li className="nav-item" key={index}>
                  <NavLink  className="nav-link" activeclassname="active" to={i.to}> {i.name} </NavLink>
                </li>
              ))}
              
            </ul>

            <div className="header-icons-container">
              <form className="search-conatiner">
                <input
                  type="text"
                  onChange={setSerachValue}
                  className="search-input"
                  placeholder="What are you looking for?"
                />
                <button type="submit" className="search-btn">
                  <img src={SvgPath.searchIcon} alt="search" />
                </button>
              </form>
              <div className="shop-icon-container">
                <button>
                  <img src={SvgPath.heart} />
                </button>
                <button>
                  <img src={SvgPath.shopIcon} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
