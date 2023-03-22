import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="pricing__plan">
        <h2 className="pricing__title">Basic</h2>
        <p className="pricing__price">₦200,000/month</p>
        <ul className="pricing__features">
          <li>Soil Analysis</li>
          <li>Crop Protection</li>
          <li>Irrigation Service</li>
        </ul>
        <button className="pricing__button">Choose Plan</button>
      </div>
      <div className="pricing__plan">
        <h2 className="pricing__title">Pro</h2>
        <p className="pricing__price">₦350,000/month</p>
        <ul className="pricing__features">
          <li>Soil Analysis</li>
          <li>Crop Protection</li>
          <li>Irrigation Service</li>
          <li>Precision farming</li>
          <li>Crop monitoring</li>
          <li>Pest management</li>
        </ul>
        <button className="pricing__button">Choose Plan</button>
      </div>
      <div className="pricing__plan">
        <h2 className="pricing__title">Premium</h2>
        <p className="pricing__price">₦500,000/month</p>
        <ul className="pricing__features">
          <li>Soil Analysis</li>
          <li>Crop Protection</li>
          <li>Irrigation Service</li>
          <li>Precision farming</li>
          <li>Crop monitoring</li>
          <li>Pest management</li>
          <li>Crop planning</li>
          <li>Financial analysis</li>
          <li>Marketing services</li>
        </ul>
        <button className="pricing__button">Choose Plan</button>
      </div>
    </div>
  );
};

export default Pricing;
