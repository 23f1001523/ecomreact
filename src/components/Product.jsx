import React, { useState, useEffect } from "react";
import "../assets/css/ProductForm.css"; // We'll add styles here

function Product({ categories = [], onAddProduct }) {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (categories.length > 0 && !category) {
      setCategory(categories[0]);
    }
  }, [categories, category]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName.trim()) return alert("Product name required!");
    if (!price || isNaN(price) || Number(price) <= 0)
      return alert("Please enter a valid positive price!");
    if (!category) return alert("Please select a category!");

    onAddProduct({ name: productName.trim(), price: Number(price), category });

    setProductName("");
    setPrice("");
  };

  if (categories.length === 0) {
    return <p>Please add at least one category before adding products.</p>;
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h3>Add New Product</h3>

      <label>
        Product Name
        <input
          type="text"
          placeholder="Enter product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </label>

      <label>
        Price (Rs.)
        <input
          type="number"
          min="0"
          step="0.01"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>

      <label>
        Category
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      <button type="submit" className="btn-primary">
        Add Product
      </button>
    </form>
  );
}

export default Product;
