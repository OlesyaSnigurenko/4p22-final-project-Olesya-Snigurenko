import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Header } from "shared";
import { Footer } from "shared";
import { Button } from "../components";
import api from "../components/config/api";

import "./Product.css";

const Product = () => {
  const params = useParams();
  const [productInfo, setProductsInfo] = useState([]);

  useEffect(() => {
    api.fetchProduct(params.productId).then((data) => {
      setProductsInfo(data);
    });
  }, [params]);

  const addToCart = () => {
    console.log(productInfo.id + " " + productInfo.title);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const next = Number(productInfo.id) + 1;
  const last = Number(productInfo.id) - 1;
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="card-info">
        <p className="card-info__title">{productInfo.title}</p>
        <p className="card-info__title-name">
          Главная - {productInfo.category} - <span>{productInfo.title}</span>
        </p>
        <div className="card-info_navigation">
          <p className="card-info__last" onClick={() => navigate(`/catalog/${last}`)}>
            К предыдущему товару
          </p>
          <p className="card-info__next" onClick={() => navigate(`/catalog/${next}`)}>
            К следующему товару
          </p>
        </div>
        <img className="card-info__image" src={productInfo.image} />
        <div className="card-info__wrapper">
          <p className="card-info-wrapper__price">{productInfo.price} ₽</p>
          <p className="card-info-wrapper__description-title">Описание</p>
          <p className="card-info-wrapper__description">{productInfo.description}</p>
          <div className="card-info-wrapper__batton" onClick={addToCart}>
            <Button text="Добавить в корзину" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
