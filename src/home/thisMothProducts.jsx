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
import SvgPath from "../assets/svg/SvgPath";
import Button from "../snippets/butttons/button";

const ThisMothProducts = (props) => {
  const swiperRef = useRef(null);

  const array = [
    {
      image: ImgPath.thismonth1,
      head: "The north coat",
      price: "$260",
      rate: "88",
    },
    {
      image: ImgPath.thismonth2,
      head: "Gucci duffle bag",
      price: "$960",
      rate: "75",

    },
    {
      image: ImgPath.thismonth3,
      head: "RGB liquid CPU Cooler",
      price: "$160",
      rate: "99",
    },
    {
      image: ImgPath.thismonth4,
      head: "Small BookSelf ",
      price: "$360",
      rate: "74",
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
              <Button name="View All" bgColor="#DB4444" />
            </div>
          </div>

          <Swiper
            ref={swiperRef}
            pagination={false}
            navigation={false} // Disable default navigation
            modules={[Pagination, Navigation]}
            className="mySwiper"
            slidesPerView={4}
          >
            {array.map((i, index) => (
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