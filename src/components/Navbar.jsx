import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = sessionStorage.getItem("user");

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand text-primary fs-5" to="/">
          ShopSmart
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="position-absolute top-50 start-50 translate-middle"
          style={{ width: "250px", maxWidth: "90vw" }}
        >
          <div className="ms-auto">
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <span classname="input-group-text">
                <button className="btn btn-primary">
                  <i class="bi bi-search"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/">
                <i class="bi bi-house"></i> Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/shop">
                <i class="bi bi-bag"></i> Shop
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/cart">
                <i class="bi bi-cart4"></i> Cart
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/contact">
                <i class="bi bi-telephone"></i> Contact
              </Link>
            </li>
            {!user ? (
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/login">
                  <i className="bi bi-person"></i> Login
                </Link>
              </li>
            ) : (
              <>
                <li className="nav-item my-2 mx-2">
                  <span className="navbar-text ">
                    <i className="bi bi-person-circle me-1"></i>
                    Welcome, <strong>{user}</strong>
                  </span>
                </li>
                <li className="nav-item mx-2">
                  <button
                    className="btn btn-outline-danger"
                    onClick={handleLogout}
                  >
                    <i className="bi bi-box-arrow-right me-1"></i> Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
