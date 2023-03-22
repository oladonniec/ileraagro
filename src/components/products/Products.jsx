import React, { useState } from "react";
import "./Products.css";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation]);

const Products = () => {
  const oilImg = process.env.PUBLIC_URL + "/assets/oils/oilandfat.png";
  const demoOilImg = process.env.PUBLIC_URL + "/assets/oils/demooil.png";
  const sheaButterImg = process.env.PUBLIC_URL + "/assets/oils/shebutter.jpg";
  const millsImg = process.env.PUBLIC_URL + "/assets/mills/millssample.png";
  const fredysImg =
    process.env.PUBLIC_URL + "/assets/snacks/frendys-Corn-Puff.png";
  const trixcocoImg =
    process.env.PUBLIC_URL + "/assets/snacks/COCO-FLVOUR-Trix.png";
  const wowstickChocoImg =
    process.env.PUBLIC_URL + "/assets/snacks/wowsticks-choco.png";
  const wowstickOnionImg =
    process.env.PUBLIC_URL + "/assets/snacks/wowsticks-onion.png";

  const [currentProductTab, setCurrentProductTab] = useState("oilProducts");
  return (
    <div className="products" id="productsGallery">
      <div className="products-container">
        <div className="products-header">
          <h2>Ilera Agro products</h2>
          <ul className="nav-tabs">
            <li
              className={
                currentProductTab === "oilProducts"
                  ? "nav-tab active"
                  : "nav-tab"
              }
              onClick={() => setCurrentProductTab("oilProducts")}
            >
              Ilera Oil
            </li>
            <li
              className={
                currentProductTab === "millProducts"
                  ? "nav-tab active"
                  : "nav-tab"
              }
              onClick={() => setCurrentProductTab("millProducts")}
            >
              Ilera Mills
            </li>
            <li
              className={
                currentProductTab === "snackProducts"
                  ? "nav-tab active"
                  : "nav-tab"
              }
              onClick={() => setCurrentProductTab("snackProducts")}
            >
              Snacks
            </li>
            <li
              className={
                currentProductTab === "cerealProducts"
                  ? "nav-tab active"
                  : "nav-tab"
              }
              onClick={() => setCurrentProductTab("cerealProducts")}
            >
              Cereal
            </li>
            <li
              className={
                currentProductTab === "exportProducts"
                  ? "nav-tab active"
                  : "nav-tab"
              }
              onClick={() => setCurrentProductTab("exportProducts")}
            >
              Exports
            </li>
          </ul>
        </div>
        {currentProductTab === "oilProducts" ? (
          <Swiper
            slidesPerView={3}
            modules={[Navigation]}
            spaceBetween={10}
            navigation
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              774: {
                slidesPerView: 2,
              },
              1150: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="swiSliderCardsContainer">
                <a
                  href="#product"
                  alt="Mythrill"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="card">
                    <div className="wrapper">
                      <img src={oilImg} className="cover-image" alt="" />
                    </div>
                    <div className="title">
                      <div className="info">
                        <h3>Shea Butter</h3>
                        <span className="price">₦7000</span>
                      </div>
                      <button>Add To Cart</button>
                    </div>
                    <img src={sheaButterImg} className="character" alt="" />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiSliderCardsContainer">
                <a
                  href="#product"
                  alt="Mythrill"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="card">
                    <div className="wrapper">
                      <img src={demoOilImg} className="cover-image" alt="" />
                    </div>
                    <div className="title">
                      <div className="info">
                        <h3>Ilera Oil D2</h3>
                        <span className="price">₦9000</span>
                      </div>
                      <button>Add To Cart</button>
                    </div>
                    <img src={demoOilImg} className="character" alt="" />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiSliderCardsContainer">
                <a
                  href="#product"
                  alt="Mythrill"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="card">
                    <div className="wrapper">
                      <img src={oilImg} className="cover-image" alt="" />
                    </div>
                    <div className="title">
                      <div className="info">
                        <h3>Shea Butter</h3>
                        <span className="price">₦7000</span>
                      </div>
                      <button>Add To Cart</button>
                    </div>
                    <img src={demoOilImg} className="character" alt="" />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiSliderCardsContainer">
                <a
                  href="#product"
                  alt="Mythrill"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="card">
                    <div className="wrapper">
                      <img src={oilImg} className="cover-image" alt="" />
                    </div>
                    <div className="title">
                      <div className="info">
                        <h3>Shea Butter</h3>
                        <span className="price">₦7000</span>
                      </div>
                      <button>Add To Cart</button>
                    </div>
                    <img src={demoOilImg} className="character" alt="" />
                  </div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        ) : currentProductTab === "millProducts" ? (
          <Swiper slidesPerView={3} navigation>
            <SwiperSlide>
              <div className="swiSliderCardsContainer">
                <a
                  href="#product"
                  alt="Mythrill"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="card">
                    <div className="wrapper">
                      <img src={millsImg} className="cover-image" alt="" />
                    </div>
                    <div className="title">
                      <h3>Ilera Mills Demo</h3>
                      <button>Add To Cart</button>
                    </div>
                    <img src={millsImg} className="character" alt="" />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiSliderCardsContainer">
                <a
                  href="#product"
                  alt="Mythrill"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="card">
                    <div className="wrapper">
                      <img src={millsImg} className="cover-image" alt="" />
                    </div>
                    <div className="title">
                      <h3>Ilera Mills Demo</h3>
                      <button>Add To Cart</button>
                    </div>
                    <img src={millsImg} className="character" alt="" />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiSliderCardsContainer">
                <a
                  href="#product"
                  alt="Mythrill"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="card">
                    <div className="wrapper">
                      <img src={millsImg} className="cover-image" alt="" />
                    </div>
                    <div className="title">
                      <h3>Ilera Mills Demo</h3>
                      <button>Add To Cart</button>
                    </div>
                    <img src={millsImg} className="character" alt="" />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiSliderCardsContainer">
                <a
                  href="#product"
                  alt="Mythrill"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="card">
                    <div className="wrapper">
                      <img src={millsImg} className="cover-image" alt="" />
                    </div>
                    <div className="title">
                      <h3>Ilera Mills Demo</h3>
                      <button>Add To Cart</button>
                    </div>
                    <img src={millsImg} className="character" alt="" />
                  </div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        ) : currentProductTab === "snackProducts" ? (
          <Swiper slidesPerView={3} navigation>
            <SwiperSlide>
              <div className="swiSliderCardsContainer">
                <a
                  href="#product"
                  alt="Mythrill"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="card">
                    <div className="wrapper">
                      <img src={fredysImg} className="cover-image" alt="" />
                    </div>
                    <div className="title">
                      <h3>Fredys Corn Puff</h3>
                      <button>Add To Cart</button>
                    </div>
                    <img src={fredysImg} className="character" alt="" />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiSliderCardsContainer">
                <a
                  href="#product"
                  alt="Mythrill"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="card">
                    <div className="wrapper">
                      <img src={trixcocoImg} className="cover-image" alt="" />
                    </div>
                    <div className="title">
                      <h3>Trix Cocoa</h3>
                      <button>Add To Cart</button>
                    </div>
                    <img src={trixcocoImg} className="character" alt="" />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiSliderCardsContainer">
                <a
                  href="#product"
                  alt="Mythrill"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="card">
                    <div className="wrapper">
                      <img
                        src={wowstickChocoImg}
                        className="cover-image"
                        alt=""
                      />
                    </div>
                    <div className="title">
                      <h3>WOW Sticks Choco</h3>
                      <button>Add To Cart</button>
                    </div>
                    <img src={wowstickChocoImg} className="character" alt="" />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiSliderCardsContainer">
                <a
                  href="#product"
                  alt="Mythrill"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="card">
                    <div className="wrapper">
                      <img
                        src={wowstickOnionImg}
                        className="cover-image"
                        alt=""
                      />
                    </div>
                    <div className="title">
                      <h3>WOW Stick Onion</h3>
                      <button>Add To Cart</button>
                    </div>
                    <img src={wowstickOnionImg} className="character" alt="" />
                  </div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        ) : (
          <div>No Products Found</div>
        )}
      </div>
    </div>
  );
};

export default Products;
