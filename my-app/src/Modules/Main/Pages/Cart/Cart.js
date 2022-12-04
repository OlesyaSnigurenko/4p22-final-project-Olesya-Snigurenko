import React from "react";
import { Header } from "shared";
import { Footer } from "shared";

import "./Cart.css";

const Cart = () => {
  return (
    <div>
      <Header />
      <div className="cart">
        <p>Здесь должна была быть корзина, но я ее не сделала (:</p>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
