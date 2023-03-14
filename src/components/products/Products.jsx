/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import "./Products.css";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

SwiperCore.use([Navigation]);

const Products = () => {
  const [currentProductTab, setCurrentProductTab] = useState("oilProducts");
  return (
    <div className="products">
      <div className="products-container">
        <div className="products-header">
          <h2>Ilera Agro products</h2>
          <ul className="nav-tabs">
            <li
              className="nav-tab active"
              onClick={() => setCurrentProductTab("oilProducts")}
            >
              Ilera Oil
            </li>
            <li
              className="nav-tab"
              onClick={() => setCurrentProductTab("millProducts")}
            >
              Ilera Mills
            </li>
            <li
              className="nav-tab"
              onClick={() => setCurrentProductTab("snackProducts")}
            >
              Snacks
            </li>
            <li
              className="nav-tab"
              onClick={() => setCurrentProductTab("snackProducts")}
            >
              Cereal
            </li>
            <li
              className="nav-tab"
              onClick={() => setCurrentProductTab("snackProducts")}
            >
              Exports
            </li>
          </ul>
        </div>
        {currentProductTab === "oilProducts" ? (
          <Swiper navigation>
            <SwiperSlide>
              <div className="swiSliderCardsContainer">
                <a
                  href="#product"
                  alt="Mythrill"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div class="card">
                    <div class="wrapper">
                      <img
                        src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
                        class="cover-image"
                        alt=""
                      />
                    </div>
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
                      class="title"
                      alt=""
                    />
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
                      class="character"
                      alt=""
                    />
                  </div>
                </a>
                <a
                  href="https://www.mythrillfiction.com/force-mage"
                  alt="Mythrill"
                  target="_blank"
                >
                  <div class="card">
                    <div class="wrapper">
                      <img
                        src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
                        class="cover-image"
                        alt=""
                      />
                    </div>
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png"
                      class="title"
                      alt=""
                    />
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
                      class="character"
                      alt=""
                    />
                  </div>
                </a>
                <a
                  href="https://www.mythrillfiction.com/force-mage"
                  alt="Mythrill"
                  target="_blank"
                >
                  <div class="card">
                    <div class="wrapper">
                      <img
                        src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
                        class="cover-image"
                        alt=""
                      />
                    </div>
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png"
                      class="title"
                      alt=""
                    />
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
                      class="character"
                      alt=""
                    />
                  </div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        ) : currentProductTab === "millProducts" ? (
          <Swiper navigation>
            <SwiperSlide>
              <div className="swiSliderCardsContainer">
                <a
                  href="https://www.mythrillfiction.com/the-dark-rider"
                  alt="Mythrill"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div class="card">
                    <div class="wrapper">
                      <img
                        src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
                        class="cover-image"
                        alt=""
                      />
                    </div>
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
                      class="title"
                      alt=""
                    />
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
                      class="character"
                      alt=""
                    />
                  </div>
                </a>
                <a
                  href="https://www.mythrillfiction.com/force-mage"
                  alt="Mythrill"
                  target="_blank"
                >
                  <div class="card">
                    <div class="wrapper">
                      <img
                        src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
                        class="cover-image"
                        alt=""
                      />
                    </div>
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png"
                      class="title"
                      alt=""
                    />
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
                      class="character"
                      alt=""
                    />
                  </div>
                </a>
                <a
                  href="https://www.mythrillfiction.com/force-mage"
                  alt="Mythrill"
                  target="_blank"
                >
                  <div class="card">
                    <div class="wrapper">
                      <img
                        src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
                        class="cover-image"
                        alt=""
                      />
                    </div>
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png"
                      class="title"
                      alt=""
                    />
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
                      class="character"
                      alt=""
                    />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiSliderCardsContainer">
                <a
                  href="https://www.mythrillfiction.com/the-dark-rider"
                  alt="Mythrill"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div class="card">
                    <div class="wrapper">
                      <img
                        src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
                        class="cover-image"
                        alt=""
                      />
                    </div>
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
                      class="title"
                      alt=""
                    />
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
                      class="character"
                      alt=""
                    />
                  </div>
                </a>
                <a
                  href="https://www.mythrillfiction.com/force-mage"
                  alt="Mythrill"
                  target="_blank"
                >
                  <div class="card">
                    <div class="wrapper">
                      <img
                        src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
                        class="cover-image"
                        alt=""
                      />
                    </div>
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png"
                      class="title"
                      alt=""
                    />
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
                      class="character"
                      alt=""
                    />
                  </div>
                </a>
                <a
                  href="https://www.mythrillfiction.com/force-mage"
                  alt="Mythrill"
                  target="_blank"
                >
                  <div class="card">
                    <div class="wrapper">
                      <img
                        src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
                        class="cover-image"
                        alt=""
                      />
                    </div>
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png"
                      class="title"
                      alt=""
                    />
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
                      class="character"
                      alt=""
                    />
                  </div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        ) : currentProductTab === "snackProducts" ? (
          <Swiper navigation>
            <SwiperSlide>
              <div className="swiSliderCardsContainer">
                <a
                  href="https://www.mythrillfiction.com/the-dark-rider"
                  alt="Mythrill"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div class="card">
                    <div class="wrapper">
                      <img
                        src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
                        class="cover-image"
                        alt=""
                      />
                    </div>
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
                      class="title"
                      alt=""
                    />
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
                      class="character"
                      alt=""
                    />
                  </div>
                </a>
                <a
                  href="https://www.mythrillfiction.com/force-mage"
                  alt="Mythrill"
                  target="_blank"
                >
                  <div class="card">
                    <div class="wrapper">
                      <img
                        src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
                        class="cover-image"
                        alt=""
                      />
                    </div>
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png"
                      class="title"
                      alt=""
                    />
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
                      class="character"
                      alt=""
                    />
                  </div>
                </a>
                <a
                  href="https://www.mythrillfiction.com/force-mage"
                  alt="Mythrill"
                  target="_blank"
                >
                  <div class="card">
                    <div class="wrapper">
                      <img
                        src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
                        class="cover-image"
                        alt=""
                      />
                    </div>
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png"
                      class="title"
                      alt=""
                    />
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
                      class="character"
                      alt=""
                    />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiSliderCardsContainer">
                <a
                  href="https://www.mythrillfiction.com/the-dark-rider"
                  alt="Mythrill"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div class="card">
                    <div class="wrapper">
                      <img
                        src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
                        class="cover-image"
                        alt=""
                      />
                    </div>
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
                      class="title"
                      alt=""
                    />
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
                      class="character"
                      alt=""
                    />
                  </div>
                </a>
                <a
                  href="https://www.mythrillfiction.com/force-mage"
                  alt="Mythrill"
                  target="_blank"
                >
                  <div class="card">
                    <div class="wrapper">
                      <img
                        src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
                        class="cover-image"
                        alt=""
                      />
                    </div>
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png"
                      class="title"
                      alt=""
                    />
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
                      class="character"
                      alt=""
                    />
                  </div>
                </a>
                <a
                  href="https://www.mythrillfiction.com/force-mage"
                  alt="Mythrill"
                  target="_blank"
                >
                  <div class="card">
                    <div class="wrapper">
                      <img
                        src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
                        class="cover-image"
                        alt=""
                      />
                    </div>
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png"
                      class="title"
                      alt=""
                    />
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
                      class="character"
                      alt=""
                    />
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
