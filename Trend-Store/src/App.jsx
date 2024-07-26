import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Hero from "./components/Hero/Hero";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import "./index.css";
import CartProvider from "./context/CartProvider";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = (event) => {
    setCartIsShow(true);
  };

  const closeCartHandler = (event) => {
    event.preventDefault();
    setCartIsShow(false);
  };

  return (
    <CartProvider>
      {cartIsShow && <Cart closeCartHandler={closeCartHandler}></Cart>}
      <Header showCartHandler={showCartHandler}></Header>
      <Hero></Hero>
      <Products></Products>
    </CartProvider>
  );
}

export default App;
