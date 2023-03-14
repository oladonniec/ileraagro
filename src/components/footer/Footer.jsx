import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const logoUrl = process.env.PUBLIC_URL + "/Ilera_Agro_Logo.png";
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logoUrl} alt="ILERA Agro" />
          <p>ILERA Agro</p>
        </div>
        <div className="footer-links">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products Gallery</a>
            </li>
            <li>
              <a href="#">Our Company</a>
            </li>
            <li>
              <a href="#">ILERA Divisions</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>123 Main Street, Anytown USA 12345</p>
          <p>(123) 456-7890</p>
          <p>info@ileraagro.com</p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 ILERA Agro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
