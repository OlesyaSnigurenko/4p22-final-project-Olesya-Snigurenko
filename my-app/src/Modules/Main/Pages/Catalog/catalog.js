import React, { useEffect, useRef, useState } from "react";
import { Header } from "shared";
import { Footer } from "shared";
import api from "../components/config/api";
import { ProductCard } from "../components";
import searchIcon from "assets/Image/search.svg";

import "./Catalog.css";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([]);
  const [foundProducts, setFoundProducts] = useState([]);

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState([]);

  const searchBattonRef = useRef(null);

  useEffect(() => {
    api.fetchProducts().then((data) => {
      setProducts(data);
      setFoundProducts(data);
      setTotalProducts(data);

      setCategories(Array.from(new Set(data.map((item) => item.category))));
    });
  }, []);

  const onSearch = () => {
    setFoundProducts(products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase().trim())));
  };

  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(products.filter((product) => product.category === selectedCategory));
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory, products]);

  useEffect(() => {
    if (filteredProducts.length !== products.length) {
      const totalProducts = foundProducts.filter((product) => filteredProducts.indexOf(product) !== -1);
      setTotalProducts(totalProducts);
    } else {
      setTotalProducts(foundProducts);
    }
  }, [foundProducts, filteredProducts]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div>
      <Header />
      <div className="catalog">
        <h1 className="catalog__title">Каталог</h1>
        <p className="catalog__main">
          Главная - <span>каталог</span>
        </p>

        <div className="catalog__list">
          <div className="catalog-list__search">
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  searchBattonRef.current.click();
                }
              }}
              placeholder="Найти товар"
            />
            <button type="button" onClick={onSearch} ref={searchBattonRef}>
              <img className="catalog-list__icon" src={searchIcon} />
            </button>
          </div>
          <p onClick={() => setSelectedCategory(`Платья и сарафаны`)}>Платья и сарафаны</p>
          <p onClick={() => setSelectedCategory(`Джемпера и кардиганы`)}>Джемпера и кардиганы</p>
          <p onClick={() => setSelectedCategory(`Майки и топы`)}>Майки и топы</p>
          <p onClick={() => setSelectedCategory(`Брюки и шорты`)}>Брюки и шорты</p>
        </div>

        <div className="catalog__card">
          {totalProducts.length !== 0 ? (
            totalProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))
          ) : (
            <h1>Совпадений не найдено...</h1>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;
