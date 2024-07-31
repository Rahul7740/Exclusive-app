import SvgPath from "../assets/svg/SvgPath";

function BannerDesign(props) {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="apple-logo-container">
          <img src={SvgPath.appleLogo} alt="" />
          <p>{props.name}</p>
        </div>
        <h1>Up to {props.oFFpercent} off Voucher</h1>
        <a href="#" className="shop-button">
          <p>Shop Now</p> <img src={SvgPath.rightBtnArrowWhite} />
        </a>
      </div>
      <img className="banner-img" src={props.img} />
    </div>
  );
}
export default BannerDesign;
