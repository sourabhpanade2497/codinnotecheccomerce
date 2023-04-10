import React from 'react'
import { BiSearch, BiUser } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import "./Header.css"
function Header() {

   const  handleClick = () => {
        window.location.href = '/Profile'; 
      };
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
            <BiUser onClick={handleClick} />
        </div>
        <div className="v1"></div>
        <div className="text-right">
        <span id="content1">Explore the poweful</span><span id="content2"> eBusiness Solution</span>
        </div>
        <div className="download">
            <a href="#">(Download App)</a>
        </div>
      </nav>
    </div>
  )
}

export default Header;