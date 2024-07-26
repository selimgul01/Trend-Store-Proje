import React, { useContext } from "react";
import "./HeaderCartButton.css";
import CartIcon from "../Cart/CartIcon";
import { CartContext } from "../../context/CartProvider";
const HeaderCartButton = ({showCartHandler}) => {

  const {items} = useContext(CartContext)
  

  return (
    <button onClick={showCartHandler} className="button">
      <span className="icon">
      <CartIcon></CartIcon>
      </span>
      <span>Sepetim</span>
      <span className="badge">{items.length}</span>
    </button>
  );
};

export default HeaderCartButton;
