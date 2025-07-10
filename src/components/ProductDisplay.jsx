import { useState,useEffect } from "react";

function ProductDisplay({ products = [] }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState(""); // "success" or "error"
  const user = sessionStorage.getItem("user");

  const showModal = (message, type = "success") => {
    setModalMessage(message);
    setModalType(type);
    setModalVisible(true);
    setTimeout(() => setModalVisible(false), 2000);
  };

  function AddToCart(product) {
  
    if (!user) {
      showModal("User not Logged In", "error");
      return;
    }

    const normalizedProduct = {
      id: String(product.Id),
      name: product.Name,
      description: product.Description,
      price: product.Price,
      quantity: 1,
    };

    let existingCart = { user, items: [] };

    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        existingCart = {
          user: parsedCart.user || user,
          items: Array.isArray(parsedCart.items) ? parsedCart.items : [],
        };
      } catch {
        console.warn("Corrupt cart found, resetting.");
      }
    }

    const itemIndex = existingCart.items.findIndex(
      (item) => item.id === normalizedProduct.id
    );

    if (itemIndex > -1) {
      // Item already exists, increase quantity
      existingCart.items[itemIndex].quantity += 1;
    } else {
      // New item, add to cart
      existingCart.items.push(normalizedProduct);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    showModal(`${normalizedProduct.name} added to cart`, "success");
  }

  const updateQuantity = (id, change) => {
    const cartData = localStorage.getItem("cart");
    if (!cartData) return;

    let currentCart = JSON.parse(cartData);
    currentCart.items = currentCart.items
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + change } : item
      )
      .filter((item) => item.quantity > 0);

    localStorage.setItem("cart", JSON.stringify(currentCart));
  };

  const removeFromCart = (id) => {
    const cartData = localStorage.getItem("cart");
    if (!cartData) return;

    let currentCart = JSON.parse(cartData);
    currentCart.items = currentCart.items.filter((item) => item.id !== id);

    localStorage.setItem("cart", JSON.stringify(currentCart));
  };

  // Get current cart for rendering
  const currentCart = (() => {
    try {
      const cartData = localStorage.getItem("cart");
      const parsed = cartData ? JSON.parse(cartData) : null;
      return parsed && Array.isArray(parsed.items) ? parsed.items : [];
    } catch {
      return [];
    }
  })();

  const getInCart = (id) => currentCart.find((item) => item.id === String(id));

  return (
   <div>
      {modalVisible && (
<<<<<<< Updated upstream
        <div className={`custom-modal-backdrop`}>
          <div className={`custom-modal ${modalType}`}>
            <div className="custom-modal-header d-flex justify-content-between">
              <span className="modal-title">
                {modalType === "error" ? "⚠️ Error" : "✅ Success"}
              </span>
=======
        <div className="custom-modal-backdrop">
          <div className="custom-modal">
            <div className="custom-modal-header">
              {modalType === "success" && (
          <span className="modal-title">Product Added</span>
          
        )}
>>>>>>> Stashed changes
              <button
                className="modal-close-btn"
                onClick={() => setModalVisible(false)}
              >
                &times;
              </button>
            </div>
            <div className="custom-modal-body">{modalMessage}</div>
          </div>
        </div>
      )}

      <div className="row">
        {products.map((prod, index) => {
          const prodId = String(prod.Id);
          const inCart = getInCart(prodId);

          return (
            <div
              key={index}
              className="col-sm-6 mb-4 d-flex align-items-stretch"
            >
              <div className="card shadow-sm h-100 d-flex flex-column w-100">
                <div className="card-body d-flex flex-column">
                  <h4
                    className="card-title text-truncate text-center"
                    title={prod.Name}
                  >
                    {prod.Name}
                  </h4>
                  <p className="card-text text-muted mb-1">
                    Rs. {prod.Price.toFixed(2)}
                  </p>
                  <p className="card-text mb-1">⭐ {prod.Rating}</p>
                  <p className="card-text small">{prod.Description}</p>

                  {user ? (inCart ? (
                    <div className="d-flex align-items-center gap-2 mt-auto">
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => updateQuantity(prodId, -1)}
                      >
                        –
                      </button>
                      <span>{inCart.quantity}</span>
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => updateQuantity(prodId, 1)}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-danger btn-sm ms-auto"
                        onClick={() => removeFromCart(prodId)}
                      >
                        🗑️
                      </button>
                    </div>
                  ) : (
                    <button
                      className="btn btn-sm btn-warning mt-auto"
                      onClick={() => AddToCart(prod)}
                    >
                      Add to Cart
                    </button>
                  )) : (
                    <p className="text-muted small mt-auto">
                      Please login to add to cart
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductDisplay;
