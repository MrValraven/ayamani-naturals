import React from "react";
import "./styles.scss";
import Logo from "../../assets/logo.svg";
import UserIcon from "../../assets/user.svg";
import BasketIcon from "../../assets/cart.svg";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="logo" />
        <p>Ayamani Naturals</p>
      </div>
      <nav>
        <ul>
          <li>
            <a>Catalog</a>
          </li>
          <li>
            <a>About us</a>
          </li>
          <li>
            <a>Contacts</a>
          </li>
        </ul>
      </nav>
      <div className="icons">
        <img className="userIcon" src={UserIcon} alt="" />
        <img src={BasketIcon} alt="" />
      </div>
    </header>
  );
};

export default Header;
