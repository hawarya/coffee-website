import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  const handleRemove = (productId) => {
    const updatedCart = cartItems.filter(
      (item) => item.id !== productId
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />
        <h2>Your cart is empty</h2>
        <p>Add some products to your cart.</p>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <h1>CART</h1>
      <p>The customer successfully cart the product at finally</p>

      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} width="120" />

          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>

          <button onClick={() => handleRemove(item.id)}>
            Remove
          </button>

          <button type="button">
            BUY NOW
          </button>
        </div>
      ))}
    </>
  );
}

export default Cart;
