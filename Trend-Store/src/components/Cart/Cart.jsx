import React, { useContext } from "react";
import products from "../../productData";
import "./Cart.css";
import CartItem from "./CartItem";
import Offcanvas from "../UI/Offcanvas";
import { CartContext } from "../../context/CartProvider";

const Cart = ({ closeCartHandler }) => {

  const {items,totalAmount,clearItem} = useContext(CartContext)

  return (
    <Offcanvas closeCartHandler={closeCartHandler}>
      <div className="cart-head">
        <h2>Sepetim</h2>
        <a onClick={closeCartHandler} className="cart-close" href="/">
          X
        </a>
      </div>
      <ul className="cart-items">
        {items.map((product) => (
          <CartItem key={product.id} items={items} product={product} />
        ))}
      </ul>
      <div className="total">
        <span>Toplam Değer</span>
        <span>{totalAmount} ₺</span>
      </div>
      <div className="actions">
        <button className="cart-order"> Sipariş Ver</button>
        <button onClick={clearItem} className="cart-clear"> Sepeti Temizle</button>
      </div>
    </Offcanvas>
  );
};

export default Cart;
