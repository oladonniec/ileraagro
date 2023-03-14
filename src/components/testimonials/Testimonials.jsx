import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">What Our Customers Say</h2>
      <div className="testimonial-card-container">
        <div className="testimonial-card">
          <div className="testimonial-quote">
            <span className="quote-mark">&#8220;</span>
            <p className="quote-text">
              I have been using Ilera Agro for all my farm inputs and I am
              extremely happy with the quality of their products and their
              customer service.
            </p>
          </div>
          <div className="testimonial-info">
            <img
              src="https://via.placeholder.com/150"
              alt="testimonial"
              className="testimonial-image"
            />
            <div className="testimonial-name">
              <p className="name-text">John Doe</p>
              <p className="name-position">Farmer</p>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-quote">
            <span className="quote-mark">&#8220;</span>
            <p className="quote-text">
              I have recommended Ilera Agro to many of my friends and colleagues
              and they have all been very happy with the quality of the products
              and services they offer.
            </p>
          </div>
          <div className="testimonial-info">
            <img
              src="https://via.placeholder.com/150"
              alt="testimonial"
              className="testimonial-image"
            />
            <div className="testimonial-name">
              <p className="name-text">Jane Smith</p>
              <p className="name-position">Agricultural Scientist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
