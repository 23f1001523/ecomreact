import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    const parsed = JSON.parse(savedCart);
    console.log("🛒 Loaded cart items:", parsed);
    setCartItems(parsed);
  }
}, []);


  // Save to localStorage on update
  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cartItems));
  // }, [cartItems]);

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
           <Navbar />
      <div className="container py-4">
     
        <h2 className="mb-4">Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-muted">Your cart is empty.</p>
        ) : (
          <ul className="list-group mb-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div className="flex-grow-1">
                    <strong>{item.name}</strong> <br />
                    <span>${item.price.toFixed(2)} each</span>
                  </div>

                {/* Quantity Controls */}
                <div className="d-flex align-items-center mx-3">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    −
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeItem(item.id)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        )}

        <h5>Total: ${total.toFixed(2)}</h5>
      </div>
    </div>
  );
}

export default ShoppingCart;
