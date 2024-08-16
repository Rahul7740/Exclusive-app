import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "../style/header.css";
import SvgPath from "../assets/svg/SvgPath";
import { useSearch } from "../contaxt/SearchFIlterContext";

import menuLinks from "../json/menuLinks.json";
function Header() {
  const { setsearch } = useSearch();

  function setSerachValue(event) {
    setsearch(event.target.value);
  }
  const [menu1 , setMenu] = useState(false)
  
  return (
    <>
      <header id="upScroll"  className="header-section">
        <div className="container">
          <div className="header">
            <NavLink className="main-logo" to={"/"}>
              Exclusive
            </NavLink>
            <ul className={`navbar-nav ${menu1 === false && "navbar-nav-transform"}`}  >
              {menuLinks.map((i, index) => (
                <li className="nav-item" key={index}>
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    to={i.to}
                    onClick={()=>{setMenu(false)}}
                  >
                    {" "}
                    {i.name}{" "}
                  </NavLink>
                </li>
              ))}
              <button onClick={()=>{setMenu(false)}} className="display-none-to-block-655 close-btn">
                  <img src={SvgPath.close} />
                </button>
            </ul>

            <div className="header-icons-container">
              <div className="display-block-none-1100">
                <Link to={"/viewAllProducts"}>

                <form className="search-conatiner display-none-black-1100">
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
                </Link>
              </div>

              <div className="shop-icon-container">
                <Link to={"/viewAllProducts"} type="submit" className="display-none-block-1100 search-btn ">
                  <img src={SvgPath.searchIcon} alt="search" />
                </Link>
                <button>
                  <img src={SvgPath.heart} />
                </button>
                <Link to={"/cart"}>
                  <img src={SvgPath.shopIcon} />
                </Link>
                <Link to={"/profile"}>
                  <img src={SvgPath.profile} />
                </Link>
                <button onClick={()=>{setMenu(true)}} className="display-none-to-block-655">
                  <img src={SvgPath.menu} />
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
