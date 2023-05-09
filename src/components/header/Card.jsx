import React, { useState } from "react";
import { AiFillShopping, AiOutlineClose } from "react-icons/ai";

import CartItems from "./CartItems";
import { product } from "../../assets/data/data";
import { useSelector } from "react-redux";

function Card() {
  const [cardOpen, setCartOpen] = useState(false);

  const closeCard = () => {
    setCartOpen(null);
  };

  const quantity = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.itemsList);

  // total
  let total = 0;
  const itemsLists = useSelector((state) => state.cart.itemsList);
  itemsLists.forEach((item) => {
    total += item.totalPrice;
  });

  return (
    <>
      <div className="card" onClick={() => setCartOpen(!cardOpen)}>
        <AiFillShopping className="cardIcon" />
        <span className="flexCenter">{quantity}</span>
      </div>
      <div className={cardOpen ? "overlay" : "nonoverlay"}></div>
      <div className={cardOpen ? "cartItem" : "cardhide"}>
        <div className="title flex">
          <h2>Shopping Cart</h2>
          <button onClick={closeCard}>
            <AiOutlineClose className="icon" />
          </button>
        </div>
        {cartItems.map((item) => {
          return (
            <CartItems
              key={item.id}
              id={item.id}
              cover={item.cover}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              totalPrice={item.totalPrice}
            />
          );
        })}

        <div className="checkOut">
          <button>
            <span>Priced To Checkout</span>
            <label htmlFor="">$ {total}</label>
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
