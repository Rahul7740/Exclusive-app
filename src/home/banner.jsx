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
import { Fragment, useState } from "react";
// import Button from "../snippets/butttons/button";
// import { useTheme } from "../contaxt/themecontaxt";

import links from "../json/bannercategories.json";

import phones from "../json/iphones.json";
function Banner() {
  // const { theme, modebtn } = useTheme();

  const [slide,setSlide] = useState(false)

  function changeSlide(){
    setSlide(slide === false ? true : false)
  }

  return (
    <>
      <section className="sectionConatiner">
        {/* <button onClick={() => modebtn()}>modebtn</button> */}
        {/* <h1>{theme}</h1> */}
        <div className="container">
          <div className="sliderbar-AND-banner-DIV ">
            <nav className={`sidebar ${slide === true && "slidebar-transform"}`}>
              <button onClick={changeSlide} className="slidbar-show-hide display-none-block-1100"><img src={SvgPath.rightArrow} alt="" /></button>
              <ul>
                {links.map((item, index) => (
                  <li className="flex-spaceBetween" key={index}>
                    <Link className="sliderbar-links" to="/error">
                      {item.name}
                    </Link>
                    {item.img && (
                      <img src={SvgPath.rightArrow} alt="right-arrow" />
                    )}
                  </li>
                ))}
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
              {phones.map((i, index) => (
                <SwiperSlide key={index}>
                  <BannerDesign
                    name={i.name}
                    img={i.img}
                    oFFpercent={i.oFFpercent}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <a className="upArrow" href="#upScroll">
        <img src={SvgPath.upArrowWithBG} />
      </a>
      <img src="" alt="" />
    </>
  );
}

export default Banner;
