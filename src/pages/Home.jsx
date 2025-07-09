import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Footer from "../components/Footer.jsx";
import Carousel from "../components/Carousel";
import HomeCategoryDisplay from "../components/HomeCategoryDisplay.jsx";


import InitialDeals from "../database/Deals.js";
import InitialSuggestions from "../database/Suggestions.js";

function Home({ cart, setCart }) {


  const [deals, setDeals] = useState(() => {
    const saved = localStorage.getItem("deals");
    return saved ? JSON.parse(saved) : InitialDeals;
  });

  const [suggestions, setSuggestions] = useState(() => {
    const saved = localStorage.getItem("suggestions");
    return saved ? JSON.parse(saved) : InitialSuggestions;
  });

  useEffect(() => {
    localStorage.setItem("deals", JSON.stringify(deals));
  }, [deals]);

  useEffect(() => {
    localStorage.setItem("suggestions", JSON.stringify(suggestions));
  }, [suggestions]);

  // Extract category names
  const myDeal = deals.map((cat) => cat.Category);
  const mySuggestion = suggestions.map((cat) => cat.Category);

  // Flatten products with category info (if needed later)
  const dealProducts = deals.flatMap((cat) =>
    cat.Products.map((prod) => ({
      ...prod,
      category: cat.Category,
    }))
  );

  const suggestionProducts = suggestions.flatMap((cat) =>
    cat.Products.map((prod) => ({
      ...prod,
      category: cat.Category,
    }))
  );

  return (
    <div className="container-fluid">
      <Navbar />
      {/* <HeroSection /> */}
      <Carousel />

      <div>
        <h3>Today's Deals (30% OFF)</h3>
        <HomeCategoryDisplay categories={deals} />
      </div>

      <div>
        <h3>Suggested For You</h3>
        <HomeCategoryDisplay categories={suggestions} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
