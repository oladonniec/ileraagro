import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Pricing from "../components/pricing/Pricing";
import Testimonials from "../components/testimonials/Testimonials";
import Products from "../components/products/Products";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Products />
      <Testimonials />
      <Pricing />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
