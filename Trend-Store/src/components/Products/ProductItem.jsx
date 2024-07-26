import React, { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import "./ProductItem.css";
import Rating from "./Rating";
import Card from "../UI/Card";

const ProductItem = ({ product }) => {
  const { name, id, description, img, price, amount } = product;
  const { addItem,items } = useContext(CartContext);

  return ( 
    <Card>
      <img src={img} alt={name} />
      <h3 className="product-title">{name}</h3>
      <p>{description}</p>
      <div className="product-info">
        <Rating></Rating>
        <span className="price">{price} ₺</span>
      </div>
      <button className="add-to-cart" onClick={() => {addItem(product)}}>
        Sepete Ekle
      </button>
    </Card>
  );
};
export default ProductItem;


// const defaultCartState = {
//   items:[],
//   totalAmount:0,
// }

// const cartReducer = (state,action) => {
//   switch (action.type) {
//     case "ADD":
//       let updatedItems = [...state.items]
//       updatedItems = [...state.items,action.item]
//       return state
//     case "REMOVE":
//       return state 
//     case "CLEAR":
//       return state

//   }
// }
//  const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartState) 










