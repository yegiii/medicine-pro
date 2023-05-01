import React from "react";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function CartItems(props) {
  return (
    <>
      <div className="cardList">
        <div className="cartContent">
          <div className="img">
            <img src={props.cover} alt="product-1" />
            <button className="remove flexCenter">
              <AiOutlineClose />
            </button>
          </div>
          <div className="details">
            <p>{props.name}</p>
            <label htmlFor="">Unit Price ${props.price}</label>

            <div className="price">
              <div className="qty flexCenter">
                <button className="plus">
                  <AiOutlinePlus />
                </button>
                <button className="num">1{props.quantity}</button>
                <button className="minus">
                  <AiOutlineMinus />
                </button>
              </div>

              <div className="priceTitle">${props.totalPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItems;
