import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <div className="container">
      <a className="navbar-brand text-primary" href="#">ShopSmart</a>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item mx-2"><a className="nav-link" href="#">Home</a></li>
        <li className="nav-item mx-2"><a className="nav-link" href="#">Shop</a></li>
        <li className="nav-item mx-2"><a className="nav-link" href="#">Cart</a></li>
        <li className="nav-item mx-2"><a className="nav-link" href="#">Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
