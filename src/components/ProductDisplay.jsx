import { useState } from "react";

function ProductDisplay({ products = [], cart = [] }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  function AddToCart(prod) {
    const user = sessionStorage.getItem("user");
    console.log(user);
    if (!user) {
      console.error("User not found in sessionStorage.");
      return;
    }
    const cartItem = {
      id: prod.id,
      name: prod.Name,
      description: prod.Description,
      price: prod.Price,
      quantity: 1,
    };

    console.log("cartItem",cartItem);

    const cartStr = localStorage.getItem("cart");
    let cart;
    cart={user:user,items:[cartItem]}

    console.log("cart",cart);

    // if (cartStr) {
    //   try {
    //     cart = JSON.parse(cartStr);
    //   } catch (e) {
    //     console.warn("Invalid cart data. Resetting cart.");
    //     cart = { user: user, items: [] };
    //   }
    // } else {
    //   cart = { user: user, items: [] };
    // }

    // const existingItem = cart.items.find((item) => item.id === prod.Id);
    // if (existingItem) {
    //   existingItem.quantity += 1;
    // } else {
    //   cart.items.push(cartItem);
    // }

    localStorage.setItem("cart", JSON.stringify(cart));
  }
  const handleAddToCart = (product) => {
    const normalizedProduct = {
      id: String(product.Id),
      name: product.Name,
      price: product.Price,
      quantity: 1,
      Description: product.Description,
    };

    let newCart = Array.isArray(cart) ? [...cart] : [];
    const existing = newCart.find((item) => item.id === normalizedProduct.id);

    if (existing) {
      newCart = newCart.map((item) =>
        item.id === normalizedProduct.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      newCart.push(normalizedProduct);
    }

    // setCart(newCart);
    setModalMessage(`${normalizedProduct.name} added to cart`);
    setModalVisible(true);
    setTimeout(() => setModalVisible(false), 2000);
  };

  const updateQuantity = (id, change) => {
    const newCart = Array.isArray(cart) ? cart : [];
    const updatedCart = newCart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + change } : item
      )
      .filter((item) => item.quantity > 0);
    // setCart(updatedCart);
  };

  const removeFromCart = (id) => {
    const newCart = Array.isArray(cart) ? cart : [];
    const updatedCart = newCart.filter((item) => item.id !== id);
    // setCart(updatedCart);
  };

  return (
    <div>
      {modalVisible && (
        <div className="custom-modal-backdrop">
          <div className="custom-modal">
            <div className="custom-modal-header">
              <span className="modal-title">Product Added</span>
              <button
                className="modal-close-btn"
                onClick={() => setModalVisible(false)}
              >
                &times;
              </button>
            </div>
            <div className="custom-modal-body">{modalMessage}</div>
            <div className="custom-modal-footer">
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => setModalVisible(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="row">
        {products.map((prod, index) => {
          const prodId = String(prod.Id);
          const inCart = Array.isArray(cart)
            ? cart.find((item) => item.id === prodId)
            : null;

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

                  {inCart ? (
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
