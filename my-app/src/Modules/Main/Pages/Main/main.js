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
        <h2 className="main__heading">Что для нас важно</h2>
        <div className="main__list">
          <p>
            <span>Качество</span>
            <br />
            Наши профессионалы работают на профессиональном оборудовании для пошива одежды беспрецедентного качества
          </p>
          <p>
            <span>Скорость</span>
            <br />
            Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных
            цехах
          </p>
          <p>
            <span>Ответственность</span>
            <br />
            Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
