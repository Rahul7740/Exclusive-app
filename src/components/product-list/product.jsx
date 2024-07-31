import "./product.css";
import productImages from "./assets/image";
import ProductCard from "../../snippets/product-card/product-card";
const Product = (props) => {   
    const array = [
        {
            image: require("./assets/Frame 570.png"),
            head :"HAVIT HV-G92 Gamepad",
            price: "$120",
            rate: "88"
        },
        {
            image: require("./assets/product2.png"),
            head :"AK-900 Wired Keyboard",
            price: "$960",
            rate: "88"
        },
        {
            image: require("./assets/product3.png"),
            head :"IPS LCD Gaming Monitor",
            price: "$370",
            rate: "88"
        },
        {
            image: require("./assets/Frame 570.png"),
            head :"S-Series Comfort Chair ",
            price: "$375",
            rate: "88"
        },
        {
            image: require("./assets/Frame 570.png"),
            head :"S-Series Comfort Chair ",
            price: "$375",
            rate: "88"
        },
    ]
        

  return (
    <div className="pro-container">
        <div className="overview">
            <div className="overview-head">
                <div className="red-rec"></div>
                <h3 className="overview-h3">{props.title}</h3>
            </div>
            <div className="overview-main">
                <div className="overview-info-head">
                    <h1 className="overview-h1">{props.head}</h1>
                </div>
                <div></div>
                <div className="overview-btns">
                    <div>
                        <img src={productImages.leftArrow} alt="" />
                    </div>
                    <div>
                        <img src={productImages.rightArrow} alt="" />
                    </div>
                </div>
            </div>

            <div className="products">
                {array.map((i)=>

                (<ProductCard image={i.image} head={i.head} price={i.price} rate={i.rate} />)
                )}
            </div>
        </div>
    </div>
  )
}

export default Product;
