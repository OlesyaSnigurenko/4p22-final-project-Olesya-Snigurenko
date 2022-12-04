import React from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "shared";
import { Footer } from "shared";
import { Button } from "../components";

import main from "assets/Image/main.png";
import right from "assets/Image/right.png";
import left from "assets/Image/left.png";

import "./Main.css";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="main">
        <div className="main-color"></div>
        <div className="main-wrapper">
          <div className="main__title">
            <h1>Новые поступления в этом сезоне</h1>
            <p>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
            <div className="main-title__button" onClick={() => navigate("/catalog")}>
              <Button text="Перейти в каталог" />
            </div>
          </div>
          <div className="main__image">
            <img className="main-image__img-main" src={main} />
            <img className="main-image__img-right" src={right} />
            <img className="main-image__img-left" src={left} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
