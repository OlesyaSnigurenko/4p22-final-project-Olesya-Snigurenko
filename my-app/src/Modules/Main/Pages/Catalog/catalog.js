import React, { useEffect, useRef, useState } from "react";
import { Header } from "Shared";
import { Footer } from "Shared";
import api from "../Components/Config/api";
import Card from "../Components";
import searchIcon from "Assets/Image/search.svg";

import "./catalog.css";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([]);
  const [foundProducts, setFoundProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const searchBattonRef = useRef(null);

  useEffect(() => {
    api.fetchProducts().then((data) => {
      setProducts(data);
      setFoundProducts(data);

      setCategories(Array.from(new Set(data.map((item) => item.category))));
    });
  }, []);

  const onSearch = () => {
    setFoundProducts(products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase().trim())));
  };

  return (
    <div>
      <Header />
      <div className="catalog">
        <h1 className="catalog__title">Каталог</h1>
        <p className="catalog__main">
          Главная - <span>каталог</span>
        </p>

        <div className="catalog__search">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                searchBattonRef.current.click();
              }
            }}
            placeholder="Найти"
          />
          <button type="button" onClick={onSearch} ref={searchBattonRef}>
            <img src={searchIcon} />
          </button>
        </div>
        <br></br>
        <select name="select" onChange={(event) => console.log(event.target.value)}>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>

        {/* <div className="catalog__list">
          <p>Все товары</p>
          <p>Платья и сарафаны</p>
          <p>Джемпера и кардиганы</p>
          <p>Майки и топы</p>
          <p>Брюки и шорты</p>
          </div> */}

        <div className="catalog__card">
          {foundProducts.map((product) => {
            return (
              <Card
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;
