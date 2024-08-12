import SvgPath from "../../assets/svg/SvgPath";

const ProductCard = (props) => {
  return (
    <div className="card-wrapper">
      <div className="card-image-container">
        <img className="card-img"  src={props.image} alt={props.head} />
        <div className="add-to-cart">Add To Cart</div>
        <div className="like-Eye-container">
          <img className="card-like-btn" src={SvgPath.heartWhiteBG} alt="likeBtn" />
          <img className="card-eye-btn" src={SvgPath.eyeWithBG} alt="eye-btn" />
        </div>
        {props.percentOFF < 1000 ? (
            <p  className="card-percentOFF ">{props.percentOFF}%</p>
          ) : 
            props.percentOFF === "NEW" ? <p  className="card-percentOFF card-percentNew">{props.percentOFF}</p> : ""

           }
      </div>
      <div className="card-info">
        <h4 className="card-head">{props.head}</h4>
        <h4 className="card-price">{props.price}</h4>
        <div className="card-rating">
          <img src={SvgPath.star} alt="star" />
          <img src={SvgPath.star} alt="star" />
          <img src={SvgPath.star} alt="star" />
          <img src={SvgPath.star} alt="star" />
          {props.rate <= 75 ? (
            <img src={SvgPath.emptyStars} alt="Empty Stars" />
          ) : (
            <img src={SvgPath.star} alt="Stars" />
          )}
          <p className="card-rate-no">({props.rate})</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
