import React, { useState } from "react";
import "./Header.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { BsFillCartFill } from "react-icons/bs";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const logoUrl = process.env.PUBLIC_URL + "/Ilera_Agro_Logo.png";
  return (
    <header className="header">
      <div className="nav-links">
        <div className="logo">
          <img src={logoUrl} alt="" />
        </div>
        <nav className="navbar-links_container">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#">Home</a>
            </li>
            <li className="nav-item">
              <a href="#">Products Gallery</a>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="navdrop_link">
                <span>Our Company</span>
                <IoIosArrowDropdownCircle />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Our Values</a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="navdrop_link">
                ILERA Divisions
                <IoIosArrowDropdownCircle />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Agriculture</a>
                </li>
                <li>
                  <a href="#">Food Processing</a>
                </li>
                <li>
                  <a href="#">Logistics</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-navbar-sign">
        <div className="cart">
          <a href="#">
            <BsFillCartFill size={25} />
            <span className="cart-badge">5</span>
          </a>
        </div>
        <div className="header-navbar-menu-container-sign">
          <div className="login-register">
            <a href="#">Login / Register</a>
          </div>
        </div>
      </div>
      <div className="header-navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="header-navbar-menu-container scale-up-center">
            <ul className="header-navbar-menu-container-links">
              <li className="nav-item">
                <a href="#">Home</a>
              </li>
              <li className="nav-item">
                <a href="#">Products Gallery</a>
              </li>
              <li className="nav-item dropdown-mobile">
                <a href="#" className="navdrop_link">
                  <span>Our Company</span>
                  <IoIosArrowDropdownCircle />
                </a>
              </li>
              <li className="nav-item dropdown-mobile">
                <a href="#" className="navdrop_link">
                  ILERA Divisions
                  <IoIosArrowDropdownCircle />
                </a>
              </li>
            </ul>
            <hr></hr>
            <div className="header-navbar-menu-container-sign-mobile">
              <div className="login-register">
                <a href="#">Login / Register</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
