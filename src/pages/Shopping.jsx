import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import "../assets/css/grid.css";

import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Footer from "../components/Footer.jsx";
import Carousel from "../components/Carousel";


import CategoryDisplay from "../components/CategoryDisplay.jsx";
import InitialCatalogue from "../database/Catalogue.js";

function Shopping({ cart, setCart }) {
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



  return (
    <div className="container-fluid">
      <Navbar />
      <HeroSection /> 
      <CategoryDisplay categories={categories} />
      <Footer />
    </div>
  );
}

export default Shopping;
