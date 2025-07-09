// src/routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home.jsx';
import Login from '../components/Login.jsx';
import AdminDashboard from '../components/AdminDashboard.jsx';
import ShoppingCart from '../pages/ShoppingCart.jsx';
import Shopping from '../pages/Shopping.jsx';
import Contact from '../pages/Contact.jsx';


const AppRoutes = ({ cart, setCart }) => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/shop" element={<Shopping />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
    </Routes>
  );
};

export default AppRoutes;