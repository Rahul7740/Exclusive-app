import React, { useRef } from "react";

import "../style/product.css";
import ProductCard from "../snippets/product-card/product-card";
import ImgPath from "../assets/images/ImgPath";
import SvgPath from "../assets/svg/SvgPath";
import Button from "../snippets/butttons/button";

const OurProducts = (props) => {
  const swiperRef = useRef(null);

  const array = [
    {
      image: ImgPath.ourProduct1,
      head: "Breed Dry Dog Food",
      price: "$99",
      rate: "88",
    },
    {
      image: ImgPath.ourProduct2,
      head: "CANON EOS DSLR Camera",
      price: "$1599",
      rate: "75",

    },
    {
      image: ImgPath.ourProduct3,
      head: "ASUS FHD Gaming Laptop",
      price: "$2599",
      rate: "99",
    },
    {
      image: ImgPath.ourProduct4,
      head: "Curology Product Set  ",
      price: "$500",
      rate: "74",
    },
    {
      image: ImgPath.ourProduct5,
      head: "Kids Electric Car",
      price: "$960",
      rate: "88",
      percentOFF:"NEW",
    },
    {
      image: ImgPath.ourProduct6,
      head: "Jr. Zoom Soccer Cleats",
      price: "$1160",
      rate: "75",
    },
    {
      image: ImgPath.ourProduct7,
      head: "GP11 Shooter USB Gamepad",
      price: "$770",
      rate: "55",
      percentOFF:"NEW",
    },
    {
      image: ImgPath.ourProduct8,
      head: "Quilted Satin Jacket ",
      price: "$660",
      rate: "60",
    },
    
  ];

  return (
    <section className="all-section">
      <div className="pro-container container">
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
            <button>
                <img src={SvgPath.leftArrowWithBG} alt="Previous" />
              </button>
              <button>
                <img src={SvgPath.rightArrowWithBG} alt="Next" />
              </button>
            </div>
          </div>

          <div className="products">
            {array.map((i, index) => (
                <ProductCard
                  image={i.image}
                  head={i.head}
                  price={i.price}
                  rate={i.rate}
                  percentOFF={i.percentOFF}
                />
            ))}
          </div>
          
        </div>
        <div className="viewAllBtn" >
          <Button name="View All Products" bgColor="#DB4444" />
        </div>
      </div>
    </section>
  );
};

export default OurProducts;