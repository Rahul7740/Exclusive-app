import "./banner.css";
import IamgesPath from "./images/IamgesPath";
function Banner() {
  return (
    <>
      <section className="sectionConatiner">
        <div className="container">
          <div className="sliderbar-AND-banner-DIV ">
            <nav className="sidebar">
              <ul>
                <li className="flex-spaceBetween">
                  <a href="#">Woman's Fashion</a>
                  <img src={IamgesPath.rightArrow} alt="right-arrow" />
                </li>
                <li className="flex-spaceBetween">
                  <a href="#">Men's Fashion</a>
                  <img src={IamgesPath.rightArrow} alt="right-arrow" />
                </li>
                <li>
                  <a href="#">Electronics</a>
                </li>
                <li>
                  <a href="#">Home & Lifestyle</a>
                </li>
                <li>
                  <a href="#">Medicine</a>
                </li>
                <li>
                  <a href="#">Sports & Outdoor</a>
                </li>
                <li>
                  <a href="#">Baby's & Toys</a>
                </li>
                <li>
                  <a href="#">Groceries & Pets</a>
                </li>
                <li>
                  <a href="#">Health & Beauty</a>
                </li>
              </ul>
            </nav>
            <div className="banner">
              <div className="banner-content">
                <div className="apple-logo-container">
                  <img src={IamgesPath.appleLogo} alt="" />
                  <p>iPhone 14 Series</p>
                </div>
                <h1>Up to 10% off Voucher</h1>
                <a href="#" className="shop-button">
                  <p>Shop Now</p> <img src={IamgesPath.rightBtnArrow} />
                </a>
              </div>
              <div className="carousel-indicators">
                <span className="indicator active"></span>
                <span className="indicator"></span>
                <span className="indicator"></span>
                <span className="indicator"></span>
              </div>
              <img src={IamgesPath.iphoneBanner} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
