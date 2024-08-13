import React, { Fragment } from "react";

import "../style/product.css";
import ProductCard from "../snippets/product-card/product-card";
import SvgPath from "../assets/svg/SvgPath";
import Button from "../snippets/butttons/button";
import { Link } from "react-router-dom";

import ourProductss from "../json/ourProducts.json"
const OurProducts = (props) => {
  
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
            {ourProductss.map((i, index) => (
              <Fragment key={index}>
                <ProductCard
                  image={i.image}
                  head={i.head}
                  price={i.price}
                  rate={i.rate}
                  percentOFF={i.percentOFF}
                />
              </Fragment>
            ))}
          </div>
        </div>
        <div className="viewAllBtn">
          <Link to={"/viewAllProducts"}>
            <Button name="View All Products" bgColor="#DB4444" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
