import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/css/grid.css";

import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Category from "../components/Category.jsx";
import Product from "../components/Product.jsx";
import MainPage from "../components/MainPage.jsx";
import InitialCatalogue from "../Catalogue.js"; // ✅ Make sure the path is correct

function Home() {
  const [catalogue, setCatalogue] = useState(() => {
    const saved = localStorage.getItem("catalogue");
    return saved ? JSON.parse(saved) : InitialCatalogue;
  });


  useEffect(() => {
    localStorage.setItem("catalogue", JSON.stringify(catalogue));
  }, [catalogue]);

  // Extract categories and flat products (with category added)
  const categories = catalogue.map((cat) => cat.Category);
  const products = catalogue.flatMap((cat) =>
    cat.Products.map((prod) => ({
      ...prod,
      category: cat.Category,
    }))
  );

  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const location = useLocation();
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState("dashboard");

  // Apply current theme to body
  useEffect(() => {
    document.body.setAttribute("data-theme", currentTheme);
    document.body.className = currentTheme;
  }, [currentTheme]);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setCurrentTheme(newTheme);
  };

  // ✅ Add a new category
  const handleAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      alert("Category already exists!");
      return;
    }

    const newCat = {
      id: catalogue.length + 1,
      Category: newCategory,
      Products: [],
    };

    setCatalogue([...catalogue, newCat]);
  };

  // ✅ Add a new product to the selected category
  const handleAddProduct = (product) => {
    const updatedCatalogue = catalogue.map((cat) => {
      if (cat.Category === product.category) {
        return {
          ...cat,
          Products: [
            ...cat.Products,
            {
              Name: product.name,
              Description: product.description,
              Price: parseFloat(product.price),
              ImageURL: product.imageURL || "https://via.placeholder.com/150",
              Rating: product.rating || 0,
            },
          ],
        };
      }
      return cat;
    });

    setCatalogue(updatedCatalogue);
  };

  return (
    <div className="grid-container">
      <div className="header">
        <div className="App-header">
          <Navbar />
          <div className="header-section left">
            <span className="App-logo">ApnaCart</span>
          </div>
          <div className="header-section center">
            <div
              className="theme-switcher me-auto mt-3"
              onClick={toggleTheme}
              style={{ cursor: "pointer" }}
            >
              <span>{currentTheme === "light" ? "☀️" : "🌙"}</span>
            </div>
          </div>
          <div className="header-section right">{/* Reserved */}</div>
        </div>
      </div>

      <aside className="sidebar">
        <ul>
          <li onClick={() => setActiveView("home")}>🏠 Home</li>
          <li onClick={() => setActiveView("add-category")}>➕ Add Category</li>
          <li onClick={() => setActiveView("add-product")}>📦 Add Product</li>
          <li onClick={() => setActiveView("products")}>🛍️ View Products</li>
          <li onClick={() => setActiveView("cart")}>🛒 View Cart</li>
          <li onClick={() => setActiveView("orders")}>📜 View Orders</li>
        </ul>
      </aside>

      <main className="main">
        <HeroSection />

        {activeView === "home" && (
          <MainPage categories={categories} products={products} />
        )}

        {activeView === "add-category" && (
          <div>
            <h2>➕ Add New Category</h2>
            <Category onAddCategory={handleAddCategory} />
          </div>
        )}

        {activeView === "add-product" && (
          <div>
            <h2>📦 Add New Product</h2>
            <Product categories={categories} onAddProduct={handleAddProduct} />
          </div>
        )}

        {activeView === "products" && (
          <div>
             <MainPage categories={categories} products={products} />
          </div>
        )}

        {activeView === "cart" && (
          <div>
            <h2>🛒 Your Cart</h2>
            <p>Cart contents go here.</p>
          </div>
        )}

        {activeView === "orders" && (
          <div>
            <h2>📜 Order History</h2>
            <p>Order history will be displayed here.</p>
          </div>
        )}
      </main>

      <footer className="footer">© {new Date().getFullYear()} ApnaCart</footer>
    </div>
  );
}

export default Home;
