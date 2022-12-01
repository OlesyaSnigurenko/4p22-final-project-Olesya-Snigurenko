import React from "react";
import { useNavigate } from "react-router-dom";

import "./Header.css";

import logo from "Assets/Image/logo.svg";
import basket from "Assets/Image/basket.svg";
import telephone from "Assets/Image/telephone.svg";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header__name">
        <img src={logo} alt="logo" />
        <h1>WOMAZING</h1>
      </div>
      <div className="header__navbar">
        <p onClick={() => navigate("/")}>Главная</p>
        <p onClick={() => navigate("/catalog")}>Каталог</p>
        <p onClick={() => navigate("/contacts")}>Контакты</p>
      </div>
      <div className="header__tel">
        <img src={telephone} alt="telephone" />
        <p>+7(495)823-54-12</p>
      </div>
      <div className="header__basket">
        <img src={basket} alt="basket" />
      </div>
    </div>
  );
};

export default Header;
