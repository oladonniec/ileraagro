import React from "react";
import "./Hero.css";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

const HeroSection = () => {
  const Afrovita = process.env.PUBLIC_URL + "/assets/AfroVitaMaizeFlour.jpg";
  const WowSticks = process.env.PUBLIC_URL + "/assets/WowStickCorSnacks.jpg";
  const JumboChocalate =
    process.env.PUBLIC_URL + "/assets/JumboChocalateStick.jpg";
  return (
    <div className="hero-container">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        className="swiper-container"
      >
        <SwiperSlide className="hero-slide">
          <img src={Afrovita} alt="Slider 1" className="hero-img" />
          <div className="hero-content">
            <h1 className="glow">AfroVita Maize Flour</h1>
            <p>
              We are committed to providing fresh, high quality and sustainably
              grown produce to our customers.
            </p>
            <div className="hero-btn-container">
              <button className="hero-btn">
                SHOP NOW <FaArrowRight className="hero-icon" />
              </button>
              <button className="hero-btn">
                View LookBook <FaArrowRight className="hero-icon" />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hero-slide">
          <img src={JumboChocalate} alt="Slider 2" className="hero-img" />
          <div className="hero-content">
            <h1 className="glow">Jumbo Chocolate Flavoured Sticks</h1>
            <p>
              Discover our wide range of fresh and organically grown produce.
            </p>
            <div className="hero-btn-container">
              <button className="hero-btn">
                SHOP NOW <FaArrowRight className="hero-icon" />
              </button>
              <button className="hero-btn">
                View LookBook <FaArrowRight className="hero-icon" />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hero-slide">
          <img src={WowSticks} alt="Slider 3" className="hero-img" />
          <div className="hero-content">
            <h1 className="glow">WOWSTICKS Corn Snacks</h1>
            <p>
              Connect with like-minded individuals and stay up to date with our
              latest events and activities.
            </p>
            <div className="hero-btn-container">
              <button className="hero-btn">
                SHOP NOW <FaArrowRight className="hero-icon" />
              </button>
              <button className="hero-btn">
                View LookBook <FaArrowRight className="hero-icon" />
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
