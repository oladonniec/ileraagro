import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="pricing__plan">
        <h2 className="pricing__title">Basic</h2>
        <p className="pricing__price">$9.99/month</p>
        <ul className="pricing__features">
          <li>5 GB Storage</li>
          <li>Unlimited Projects</li>
          <li>10 Users Allowed</li>
          <li>Email Support</li>
          <li>Free Updates</li>
        </ul>
        <button className="pricing__button">Choose Plan</button>
      </div>
      <div className="pricing__plan">
        <h2 className="pricing__title">Pro</h2>
        <p className="pricing__price">$19.99/month</p>
        <ul className="pricing__features">
          <li>25 GB Storage</li>
          <li>Unlimited Projects</li>
          <li>25 Users Allowed</li>
          <li>Email &amp; Phone Support</li>
          <li>Free Updates</li>
        </ul>
        <button className="pricing__button">Choose Plan</button>
      </div>
      <div className="pricing__plan">
        <h2 className="pricing__title">Premium</h2>
        <p className="pricing__price">$29.99/month</p>
        <ul className="pricing__features">
          <li>50 GB Storage</li>
          <li>Unlimited Projects</li>
          <li>Unlimited Users</li>
          <li>Email &amp; Phone Support</li>
          <li>Free Updates</li>
        </ul>
        <button className="pricing__button">Choose Plan</button>
      </div>
    </div>
  );
};

export default Pricing;
