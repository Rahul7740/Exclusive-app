import "../style/Footer.css";

import ImgPath from "../assets/images/ImgPath";
import SvgPath from "../assets/svg/SvgPath";

function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="footer">
            <div className="fonter-content-divs">
              <h1 className="main-logo">Exclusive</h1>
              <h5 className="font20px">Subscribe</h5>
              <a className="font16px" href="">
                Get 10% off your first order
              </a>
              <div className="email-div">
                <input type="text" placeholder="Enter your email" />
                <button type="submit">
                  <img src={SvgPath.sendIconWhite} />
                </button>
              </div>
            </div>
            <div className="fonter-content-divs">
              <h5 className="font20px">Support</h5>
              <a className="font16px" href="">
                111 Bijoy sarani, Dhaka,
                <br /> DH 1515, Bangladesh.
              </a>
              <a className="font16px" href="mailto:exclusive@gmail.com">
                exclusive@gmail.com
              </a>
              <a className="font16px" href="tel:+88015-88888-9999">
                +88015-88888-9999
              </a>
            </div>
            <div className="fonter-content-divs">
              <h5 className="font20px">Account</h5>
              <a className="font16px" href="">
                My Account
              </a>
              <a className="font16px" href="">
                Login / Register
              </a>
              <a className="font16px" href="">
                Cart
              </a>
              <a className="font16px" href="">
                Wishlist
              </a>
              <a className="font16px" href="">
                Shop
              </a>
            </div>
            <div className="fonter-content-divs">
              <h5 className="font20px">Quick Link</h5>
              <a className="font16px" href="">
                Privacy Policy
              </a>
              <a className="font16px" href="">
                Terms Of Use
              </a>
              <a className="font16px" href="">
                FAQ
              </a>
              <a className="font16px" href="">
                Contact
              </a>
            </div>
            <div className="fonter-content-divs">
              <h5 className="font20px">Download App</h5>
              <p className="download-p">Save $3 with App New User Only</p>
              <div className="download-link-container">
                <img className="qrcode" src={ImgPath.qrcode} />
                <img src={ImgPath.playstore} />
                <img src={ImgPath.appstore} />
              </div>
              <div className="social-media-links">
                <a target="_blank" href="http://www.facebook.com/">
                  <img src={SvgPath.facebook} />
                </a>
                <a target="_blank" href="http://www.twitter.com/">
                  <img src={SvgPath.twitter} />
                </a>
                <a target="_blank" href="http://www.instagram.com/">
                  <img src={SvgPath.instagram} />
                </a>
                <a target="_blank" href="http://www.linkedin.com/">
                  <img src={SvgPath.linkedin} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <img src={SvgPath.C} />
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </>
  );
}
export default Footer;
