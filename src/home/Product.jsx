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

const Product = (props) => {
  const swiperRef = useRef(null);

  const array = [
    {
      image: ImgPath.product1,
      head: "HAVIT HV-G92 Gamepad",
      price: "$120",
      rate: "88",
      percentOFF:"40%",
      showPOFF:true,
    },
    {
      image: ImgPath.product2,
      head: "AK-900 Wired Keyboard",
      price: "$960",
      rate: "75",
      percentOFF:"35%",

    },
    {
      image: ImgPath.product3,
      head: "IPS LCD Gaming Monitor",
      price: "$370",
      rate: "99",
      percentOFF:"40%",
      showPOFF:true,
    },
    {
      image: ImgPath.product4,
      head: "S-Series Comfort Chair ",
      price: "$375",
      rate: "74",
      percentOFF:"50%",
      showPOFF:true,
    },
    {
      image: ImgPath.product5,
      head: "RGB liquid CPU Cooler",
      price: "$375",
      rate: "88",
      percentOFF:"60%",
      showPOFF:true,
    },
    {
      image: ImgPath.product6,
      head: "ASUS FHD Gaming Laptop",
      price: "$375",
      rate: "88",
      percentOFF:"15%",
      showPOFF:true,
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
              <button onClick={() => swiperRef.current.swiper.slidePrev()}>
                <img src={SvgPath.leftArrowWithBG} alt="Previous" />
              </button>
              <button onClick={() => swiperRef.current.swiper.slideNext()}>
                <img src={SvgPath.rightArrowWithBG} alt="Next" />
              </button>
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

export default Product;