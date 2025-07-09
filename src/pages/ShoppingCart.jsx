import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../assets/css/ShoppingCart.css";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        setCartItems(Array.isArray(parsed.items) ? parsed.items : []);
      } catch (err) {
        console.error("❌ Failed to parse cart:", err);
        setCartItems([]);
      }
    }
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (!hasLoaded) return;
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        localStorage.setItem(
          "cart",
          JSON.stringify({ ...parsed, items: cartItems })
        );
      } catch (err) {
        console.error("❌ Failed to update cart:", err);
      }
    }
  }, [cartItems, hasLoaded]);

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

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05;
  const delivery = subtotal > 999 ? 0 : 40;
  const discount = subtotal > 1000 ? subtotal * 0.1 : 0;
  const total = subtotal + tax + delivery - discount;

  return (
    <div>
      <Navbar />
      <div className="container py-5">
        <h2 className="mb-4 fw-bold">🛒 Your Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <div className="text-center my-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="Empty cart"
              width="120"
              className="mb-3"
            />
            <h5 className="text-muted">Your cart is empty</h5>
            <Link to="/" className="btn btn-primary mt-3">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="row">
            {/* Left: Cart Items */}
            <div className="col-lg-8 ">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="card mb-3 shadow-sm cart-item-card p-3"
                >
                  <div className="row g-3 align-items-center">
                    {/* <div className="col-md-2 col-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded"
                        loading="lazy"
                      />
                    </div> */}
                    <div className="col-md-4 col-8 ">
                      <h5 className="mb-1">{item.name}</h5>
                      <p className="text-muted mb-1 small">
                        ₹{item.price.toFixed(2)} each
                      </p>
                      <button
                        className="btn btn-sm btn-link text-danger p-0"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                    <div className="col-md-3 col-6 d-flex align-items-center">
                      <div className="input-group quantity-control">
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          −
                        </button>
                        <input
                          type="text"
                          className="form-control text-center"
                          value={item.quantity}
                          readOnly
                        />
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 text-end">
                      <h6 className="text-success mb-0">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Price Summary */}
            <div className="col-lg-4">
              <div className="card shadow-sm p-4 summary-card">
                <h5 className="fw-bold mb-3">Price Details</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Tax (5%)</span>
                    <span>₹{tax.toFixed(2)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Delivery Charges</span>
                    <span>{delivery === 0 ? "Free" : `₹${delivery}`}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between text-success">
                    <span>Discount</span>
                    <span>− ₹{discount.toFixed(2)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between fw-bold border-top pt-3">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </li>
                </ul>
                <button className="btn btn-primary w-100 mt-4">
                  Proceed to Checkout
                </button>
                <Link
                  to="/"
                  className="btn btn-warning w-100 mt-2"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
