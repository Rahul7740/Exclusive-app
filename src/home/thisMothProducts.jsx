import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import "../style/product.css";
import ProductCard from "../snippets/product-card/product-card";
import ImgPath from "../assets/images/ImgPath";
import Button from "../snippets/butttons/button";
 
import thisMonthProducts from "../json/thisMonthProducts.json"
import { Link } from "react-router-dom";

const ThisMothProducts = (props) => {
  const swiperRef = useRef(null);

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
              <Link to={"/viewAllProducts"}>
              <Button name="View All" bgColor="#DB4444" />
              </Link>
            </div>
          </div>

          <Swiper
            ref={swiperRef}
            pagination={false}
            navigation={false} // Disable default navigation
            modules={[Pagination, Navigation]}
            className="mySwiper"
            // slidesPerView={4}
            breakpoints={{
              540: {
                slidesPerView: 1,
              },
              650: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 3,
              },
              1100: {
                slidesPerView: 4,
              },
              1440: {
                slidesPerView: 4,
              },
            }}
          >
            {thisMonthProducts.map((i, index) => (
              <SwiperSlide key={index}>
                <ProductCard
                  image={i.image}
                  head={i.head}
                  price={i.price}
                  rate={i.rate}
                  percentOFF={i.percentOFF}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ThisMothProducts;