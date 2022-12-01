import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Main, Catalog, Contacts, Product } from "./Modules/Main/Pages";
import { Page404 } from "./Shared";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="https://OlesyaSnigurenko.github.io/4p22-final-project-Olesya-Snigurenko">
    <Routes>
      <Route path={"/"} element={<Main />} />
      <Route path={"/catalog"} element={<Catalog />} />
      <Route path={"/catalog/:productId"} element={<Product />} />
      <Route path={"/contacts"} element={<Contacts />} />
      <Route path={"*"} element={<Page404 />} />
    </Routes>
  </BrowserRouter>
);
