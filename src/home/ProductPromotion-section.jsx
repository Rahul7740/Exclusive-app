import ImgPath from "../assets/images/ImgPath";
import Button from "../snippets/butttons/button";
import "../style/ProductPromotion.css";

function ProductPromotion() {
  return (
    <>
      <section className="all-section">
        <div className="container">
          <div className="product-promotion-container">
            <div className="promotion-content">
                <h5 className="overview-h3 color-green">Categories</h5>
                <h2 className="color-white-48px"> Enhance Your Music Experience</h2>
                <img src={ImgPath.timer}  />
                <Button name="Buy Now!" bgColor="#00FF66" />
            </div>
            <img className="promtion-img" src={ImgPath.bluetoothSpeaker} alt="speaker" />
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPromotion;
