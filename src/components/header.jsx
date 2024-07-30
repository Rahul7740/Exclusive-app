import "../style/header.css";
import ImgPath from "../images/imgPath";

function Header1() {
  
  console.log(ImgPath);

  return (
    <>
      <header className="header-section">
        <div className="container">
          <div className="header">
            <h1 className="main-logo">Exclusive</h1>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link " href="#"> Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#"> About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sign Up</a>
              </li>
            </ul>
            
            <div className="header-icons-container">
                <div className="search-conatiner">
                    <input type="text" className="search-input" placeholder="What are you looking for?" />
                    <button className="search-btn"><img src={ImgPath.serachIcon} alt="search" /></button>
                </div>
                <div className="shop-icon-container">
                    <button><img src={ImgPath.Heart} /></button>
                    <button><img src={require("../images/icons/shop-icon.svg").default} /></button>
                </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header1;
