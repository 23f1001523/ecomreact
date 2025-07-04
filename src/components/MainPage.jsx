import { useState } from "react";
import "../assets/css/MainPage.css";

import CategoryDisplay from "./CategoryDisplay";

function MainPage({ categories = [], products = [] }) {
  const [selectedCategory, setSelectedCategory] = useState(
    categories.length > 0 ? categories[0] : ""
  );

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className="main-page">
      <h2>🗂️ Categories & Products</h2>
      <hr />
      <CategoryDisplay categories={categories}/>
    
    </div>
  );
}

export default MainPage;
