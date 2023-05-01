import React, { useState } from "react";
import { AiFillShopping, AiOutlineClose } from "react-icons/ai";

import CartItems from "./CartItems";
import { product } from "../../assets/data/data";
function Card() {
  const [cardOpen, setCartOpen] = useState(false);

  const closeCard = () => {
    setCartOpen(null);
  };

  return (
    <>
      <div className="card" onClick={() => setCartOpen(!cardOpen)}>
        <AiFillShopping className="cardIcon" />
        <span className="flexCenter">2</span>
      </div>
      <div className={cardOpen ? "overlay" : "nonoverlay"}></div>
      <div className={cardOpen ? "cartItem" : "cardhide"}>
        <div className="title flex">
          <h2>Shopping Cart</h2>
          <button onClick={closeCard}>
            <AiOutlineClose className="icon" />
          </button>
        </div>
        {product.map((item) => {
          <CartItems
            id={item.id}
            cover={item.cover}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
          />;
        })}
      </div>
    </>
  );
}

export default Card;
