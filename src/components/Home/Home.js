/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BiSearch, BiUser } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import "./Home.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import "@fontsource/poppins";
import "@fontsource/quattrocento";
import homeimage from '../../assets/homeimage.png';
import secondimage from '../../assets/product1.png';
import thirdimage from '../../assets/product3.png'
import { Carousel } from 'react-responsive-carousel';
function Home() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <img className="navbar-menu" src={menu} alt="menu" />
          <img className="navbar-logo" src={logo} alt="Logo" />
          <p className="text-left">
            eMAGZ
            <p className="text-below">Connecting Universe</p>
          </p>
        </div>
        <div className="navbar-right">
            <BiSearch />
            <FiShoppingCart />
            <BiUser />
        </div>
        <div className="v1"></div>
        <div className="text-right">
        <span id="content1">Explore the poweful</span><span id="content2"> eBusiness Solution</span>
        </div>
        <div className="download">
            <a href="#">(Download App)</a>
        </div>
      </nav>
     <div className="home-image">
     <Carousel>
                <div>
                    <img src= {homeimage} alt="homeimage" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={secondimage} alt="secondimage" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={thirdimage} alt="thirdimage" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
     </div>
    </div>
  );
}

export default Home;
