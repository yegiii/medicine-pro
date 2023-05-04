import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function ProductCart(props) {
  return (
    <>
      <div className="box boxItems" id="product">
        <div className="img">
          <Link>
            <img src={props.cover} alt="cover" />
          </Link>
        </div>

        <div className="details">
          <h3>${props.price}</h3>
          <p>{props.name}</p>
          <button>
            <AiOutlinePlusCircle />
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCart;
