import "./product-card.css";
import productImages from "../../components/product-list/assets/image";

const ProductCard = (props) => {
  return (
    <div className="card-wrapper">
        <div className="card-image">
            <img src={props.image} alt="" />
        </div>
        <div className="card-info"> 
            <h4 className="card-head">{props.head}</h4>
            <h4 className="card-price">{props.price}</h4>
            <div className="card-rating">
                <img src={productImages.star} alt="" />
                <img src={productImages.star} alt="" />
                <img src={productImages.star} alt="" />
                <img src={productImages.star} alt="" />
                <img src={productImages.star} alt="" />
                <p className="card-rate-no">({props.rate})</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard;
