import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, HashRouter } from "react-router-dom";

import { Main, Catalog, Product, Contacts, Cart } from "./modules/main/pages";
import { Page404 } from "./shared";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Routes>
      <Route path={"/"} element={<Main />} />
      <Route path={"/catalog"} element={<Catalog />} />
      <Route path={"/catalog/:productId"} element={<Product />} />
      <Route path={"/contacts"} element={<Contacts />} />
      <Route path={"/cart"} element={<Cart />} />
      <Route path={"*"} element={<Page404 />} />
    </Routes>
  </HashRouter>
);
