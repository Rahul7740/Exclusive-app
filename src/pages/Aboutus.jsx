import React from "react";
import { Link } from "react-router-dom";
import ImgPath from "../assets/images/ImgPath";
import "../style/about.css";
import SvgPath from "../assets/svg/SvgPath";
import Services from "../home/Services"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

const Aboutus = () => {
  return (
    <>
      <section className="all-section">
        <div className="container">
          <div className="direction-container">
            <Link to={"/"}>Home</Link>/<Link to={"/Aboutus"}>About</Link>
          </div>
          <div className="about-main-container">
            <div className="ourStory-container">
              <div className="ourstory">
                <h1>Our Story</h1>
                <p>
                  Launced in 2015, Exclusive is South Asia’s premier online
                  shopping makterplace with an active presense in Bangladesh.
                  Supported by wide range of tailored marketing, data and
                  service solutions, Exclusive has 10,500 sallers and 300 brands
                  and serves 3 millioons customers across the region.{" "}
                </p>
                <p>
                  Exclusive has more than 1 Million products to offer, growing
                  at a very fast. Exclusive offers a diverse assotment in
                  categories ranging from consumer.
                </p>
              </div>
              <img src={ImgPath.ourStory} alt="our story img" />
            </div>
          </div>
          <div class="stats-container">
            <div class="stat-services">
              <img src={SvgPath.statServices1} />
              <h3 class="stat-number">10.5k</h3>
              <p class="stat-label">Sallers active our site</p>
            </div>
            <div class="stat-services active">
              <img src={SvgPath.statServices2} />
              <h3 class="stat-number">33k</h3>
              <p class="stat-label">Mopnthly Produduct Sale</p>
            </div>
            <div class="stat-services">
              <img src={SvgPath.statServices3} />
              <h3 class="stat-number">45.5k</h3>
              <p class="stat-label">Customer active in our site</p>
            </div>
            <div class="stat-services">
              <img src={SvgPath.statServices4} />
              <h3 class="stat-number">25k</h3>
              <p class="stat-label">Anual gross sale in our site</p>
            </div>
          </div>
        </div>
      </section>
      <section className="all-section">
        <div className="container">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="members-swiper"
            slidesPerView={3}
            spaceBetween={30}
          >
            <SwiperSlide>
              <div className="member">
                  <img src={ImgPath.aboutMamber1} />
                  <h3>Tom Cruise</h3>
                  <p>Founder & Chairman</p>
                  <div className="member-social-media-links">
                    <img src={SvgPath.twitterWhite} />
                    <img src={SvgPath.instagramWhite} />
                    <img src={SvgPath.linkedinWhite} />
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="member">
                  <img src={ImgPath.aboutMamber2} />
                  <h3>Emma Watson</h3>
                  <p>Managing Director</p>
                  <div className="member-social-media-links">
                    <img src={SvgPath.twitterWhite} />
                    <img src={SvgPath.instagramWhite} />
                    <img src={SvgPath.linkedinWhite} />
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="member">
                  <img src={ImgPath.aboutMamber3} />
                  <h3>Will Smith</h3>
                  <p>Product Designer</p>
                  <div className="member-social-media-links">
                    <img src={SvgPath.twitterWhite} />
                    <img src={SvgPath.instagramWhite} />
                    <img src={SvgPath.linkedinWhite} />
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide><div className="member">
                  <img src={ImgPath.aboutMamber1} />
                  <h3>Tom Cruise</h3>
                  <p>Founder & Chairman</p>
                  <div className="member-social-media-links">
                    <img src={SvgPath.twitterWhite} />
                    <img src={SvgPath.instagramWhite} />
                    <img src={SvgPath.linkedinWhite} />
                  </div>
              </div></SwiperSlide>
            <SwiperSlide>
            <div className="member">
                  <img src={ImgPath.aboutMamber2} />
                  <h3>Emma Watson</h3>
                  <p>Managing Director</p>
                  <div className="member-social-media-links">
                    <img src={SvgPath.twitterWhite} />
                    <img src={SvgPath.instagramWhite} />
                    <img src={SvgPath.linkedinWhite} />
                  </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <Services />
      <a className="upArrow" href="#upScroll"><img src={SvgPath.upArrowWithBG} /></a>
    </>
  );
};

export default Aboutus;
