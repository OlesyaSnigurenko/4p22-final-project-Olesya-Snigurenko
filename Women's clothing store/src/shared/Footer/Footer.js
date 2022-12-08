import React from "react";
import { useNavigate } from "react-router-dom";

import "./Footer.css";

import logo from "assets/Image/logo.svg";
import instagram from "assets/Image/instagram.svg";
import facebook from "assets/Image/facebook.svg";
import twitter from "assets/Image/twitter.svg";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="body-footer">
      <div className="footer">
        <div className="footer__info">
          <div className="footer-info__logo">
            <img src={logo} alt="logo" />
            <h1>WOMAZING</h1>
          </div>
          <p>© Все права защищены</p>
          <p>Политика конфиденциальности</p>
          <p>Публичная оферта</p>
        </div>
        <div className="footer__navbar">
          <p onClick={() => navigate("/")}>Главная</p>
          <p onClick={() => navigate("/catalog")}>Каталог</p>
          <p onClick={() => navigate("/contacts")}>Контакты</p>
        </div>
        <div className="footer__contacts">
          <p>+7(965)675-93-08</p>
          <p>info@womazing.com</p>
          <div className="footer-contacts__networks">
            <img src={instagram} alt="icon instagram" />
            <img src={facebook} alt="icon facebook" />
            <img src={twitter} alt="icon twitter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
