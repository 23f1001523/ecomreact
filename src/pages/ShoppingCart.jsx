import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Load cart items from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        console.log("🛒 Loaded cart:", parsed);
        setCartItems(Array.isArray(parsed.items) ? parsed.items : []);
      } catch (err) {
        console.error("❌ Failed to parse cart from localStorage:", err);
        setCartItems([]);
      }
    }
    setHasLoaded(true);
  }, []);

  // Save updated cart items to localStorage after loading
  useEffect(() => {
    if (!hasLoaded) return;

    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        const updatedCart = { ...parsed, items: cartItems };
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      } catch (err) {
        console.error("❌ Failed to update cart in localStorage:", err);
      }
    }
  }, [cartItems, hasLoaded]);

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
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
                  <span>₹{item.price.toFixed(2)} each</span>
                </div>

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

        <h5>Total: ₹{total.toFixed(2)}</h5>
      </div>
    </div>
  );
}

export default ShoppingCart;
