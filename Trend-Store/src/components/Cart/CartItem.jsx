import React, { useContext } from "react";
import "./CartItem.css";
import { CartContext } from "../../context/CartProvider";

const CartItem = ({ product }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <li className="cart-item">
      <div className="cart-item-img">
        <img src={product.img} alt="" />
      </div>

      <div className="cart-item-info">
        <div className="cart-item-texts">
          <b>{product.name}</b>
        </div>
        <div>
          <span>₺ {product.price} x </span>
          <span className="cart-item-amount"> {product.amount}</span>
        </div>
        <a
          onClick={(event) => {
            event.preventDefault(), removeItem(product.id);
          }}
          href="/"
          className="cart-item-remove"
        >
          x
        </a>
      </div>
    </li>
  );
};

export default CartItem;
