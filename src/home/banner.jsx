import { Link } from "react-router-dom";
import "../style/banner.css";
import ImgPath from "../assets/images/ImgPath";
import SvgPath from "../assets/svg/SvgPath";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import BannerDesign from "../snippets/BannerDesign";

function Banner() {
  return (
    <>
      <section className="sectionConatiner">
        <div className="container">
          <div className="sliderbar-AND-banner-DIV ">
            <nav className="sidebar">
              <ul>
                <li className="flex-spaceBetween">
                  <a className="sliderbar-links" href="#">Woman's Fashion</a>
                  <img src={SvgPath.rightArrow} alt="right-arrow" />
                </li>
                <li className="flex-spaceBetween">
                  <a className="sliderbar-links" href="#">Men's Fashion</a>
                  <img src={SvgPath.rightArrow} alt="right-arrow" />
                </li>
                <li>
                  <a className="sliderbar-links" href="#">Electronics</a>
                </li>
                <li>
                  <a className="sliderbar-links" href="#">Home & Lifestyle</a>
                </li>
                <li>
                  <a className="sliderbar-links" href="#">Medicine</a>
                </li>
                <li>
                  <a className="sliderbar-links" href="#">Sports & Outdoor</a>
                </li>
                <li>
                  <a className="sliderbar-links" href="#">Baby's & Toys</a>
                </li>
                <li>
                  <a className="sliderbar-links" href="#">Groceries & Pets</a>
                </li>
                <li>
                  <a className="sliderbar-links" href="#">Health & Beauty</a>
                </li>
              </ul>
            </nav>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 1900,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <BannerDesign name="iPhone 14 Series"  img={ImgPath.iphoneBanner} oFFpercent="15%"/>
              </SwiperSlide>
              <SwiperSlide>
                <BannerDesign name="iPhone 13 Series" img={ImgPath.iphone13} oFFpercent="12%" />
              </SwiperSlide>
              <SwiperSlide>
                <BannerDesign name="iPhone 12 Series" img={ImgPath.iphone12} oFFpercent="19%"/>
              </SwiperSlide>
              <SwiperSlide>
                <BannerDesign name="iPhone 11 Series" img={ImgPath.iphone11} oFFpercent="30%"/>
              </SwiperSlide>
              <SwiperSlide>
                <BannerDesign name="iPhone 10 Series" img={ImgPath.iphone10} oFFpercent="10%"/>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
