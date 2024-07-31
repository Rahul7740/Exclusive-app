import { Link } from "react-router-dom";
import "../style/banner.css";
import ImgPath from "../assets/images/ImgPath";
import SvgPath from "../assets/svg/SvgPath";



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
                  <img src={SvgPath.rightArrow} alt="right-arrow" />
                </li>
                <li className="flex-spaceBetween">
                  <a href="#">Men's Fashion</a>
                  <img src={SvgPath.rightArrow} alt="right-arrow" />
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
                  <img src={SvgPath.appleLogo} alt="" />
                  <p>iPhone 14 Series</p>
                </div>
                <h1>Up to 10% off Voucher</h1>
                <a href="#" className="shop-button">
                  <p>Shop Now</p> <img src={SvgPath.rightBtnArrow} />
                </a>
              </div>
              <div className="carousel-indicators">
                <span className="indicator active"></span>
                <span className="indicator"></span>
                <span className="indicator"></span>
                <span className="indicator"></span>
              </div>
              <img src={ImgPath.iphoneBanner} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
