import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../store/cartSlice";

function ProductCart({ myKey, id, cover, name, price }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addToCart({ id, name, price, cover }));
  };
  return (
    <>
      <div className="box boxItems" id="product">
        <div className="img">
          <Link to="/#">
            <img src={cover} alt="cover" />
          </Link>
        </div>

        <div className="details">
          <h3>${price}</h3>
          <p>{name}</p>
          <button onClick={addToCart}>
            <AiOutlinePlusCircle />
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCart;
