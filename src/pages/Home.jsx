import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Footer from "../components/Footer.jsx";
import Carousel from "../components/Carousel";
import HomeCategoryDisplay from "../components/HomeCategoryDisplay.jsx";

import InitialDeals from "../database/Deals.js";
import InitialSuggestions from "../database/Suggestions.js";

function Home() {
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

      <div className="p-4 my-4 shadow-sm rounded bg-light mt-3 mb-3">
        <div className="text-center mb-3">
          <h2 className="text-primary fw-bold">🔥 Today's Deals</h2>
          <p className="text-muted">Get 30% OFF on selected products</p>
          <hr className="w-25 mx-auto border-primary border-2" />
        </div>
        <HomeCategoryDisplay categories={deals} />
      </div>

      <div className="p-4 my-4 shadow-sm rounded bg-white mb-3">
        <div className="text-center mb-3">
          <h2 className="text-success fw-bold">🎯 Suggested For You</h2>
          <p className="text-muted">Handpicked based on your interests</p>
          <hr className="w-25 mx-auto border-success border-2" />
        </div>
        <HomeCategoryDisplay categories={suggestions} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
