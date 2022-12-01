import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Header } from "Shared";
import { Footer } from "Shared";
import api from "../Components/Config/api";

import "./product.css";

const Product = () => {
  const params = useParams();
  const [productInfo, setProductsInfo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.fetchProduct(params.productId).then((data) => {
      setProductsInfo(data);
    });
  }, [params]);

  const addToCart = () => {
    console.log(productInfo.id + " " + productInfo.title);
  };

  return (
    <div>
      <Header />
      <div className="card-info">
        <p className="card-info__title">{productInfo.title}</p>
        <p className="card-info__title-name">
          Главная - {productInfo.category} - <span>{productInfo.title}</span>
        </p>
        <img className="card-info__image" src={productInfo.image} />
        <div className="card-info__wrapper">
          <p className="card-info-wrapper__price">{productInfo.price} ₽</p>
          <p className="card-info-wrapper__description-title">Описание</p>
          <p className="card-info-wrapper__description">{productInfo.description}</p>
          <batton className="card-info-wrapper__batton" onClick={addToCart}>
            Добавить в корзину
          </batton>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
