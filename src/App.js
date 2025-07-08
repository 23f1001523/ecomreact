// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import AppRoutes from "./utils/Routes.jsx";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <Router>       
        <AppRoutes/>
    </Router>
  );
}

export default App;
