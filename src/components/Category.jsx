import React, { useState } from "react";
import "../assets/css/CategoryForm.css"; // Make sure to create this CSS file or reuse existing styles

function Category({ onAddCategory }) {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!categoryName.trim()) {
      alert("Category name required!");
      return;
    }
    onAddCategory(categoryName.trim());
    setCategoryName("");
  };

  return (
    <form className="category-form" onSubmit={handleSubmit}>
      <h3>Add New Category</h3>
      <label>
        Category Name
        <input
          type="text"
          placeholder="Enter category name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          required
        />
      </label>
      <button type="submit" className="btn-primary">
        Add Category
      </button>
    </form>
  );
}

export default Category;
