
import "../style/header.css";
import SvgPath from "../assets/svg/SvgPath";
import { Link } from "react-router-dom";


function Header() {

  return (
    <>
      <header className="header-section">
        <div className="container">
          <div className="header">
            <Link  className="main-logo" to={"/"}>Exclusive</Link>
            <ul className="navbar-nav ">
              <li className="nav-item">
              <Link  className="nav-link" to={"/"}>Home</Link>
              </li>
              <li className="nav-item">
              <Link  className="nav-link" to={"/Contact"}>Contact</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to={"/Aboutus"}>About</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to={"/Signup"}>Sign up</Link>
              </li>
            </ul>

            <div className="header-icons-container">
              <div className="search-conatiner">
                <input type="text" className="search-input" placeholder="What are you looking for?" />
                <button className="search-btn"><img src={SvgPath.searchIcon} alt="search" /></button>
              </div>
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
