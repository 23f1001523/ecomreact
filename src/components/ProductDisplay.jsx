import { useState, useEffect } from "react";
function ProductDisplay({ products = [] }) {
  return (
    <div className="row">
      {products.map((prod, index) => (
        <div
          key={index}
          className="col-sm-6 mb-4 d-flex align-items-stretch"
          // align-items-stretch makes all columns stretch to row height
        >
          <div className="card shadow-sm h-100 d-flex flex-column w-100">
            {/* <img
              src={
                prod.ImageURL && prod.ImageURL.trim() !== ""
                  ? prod.ImageURL
                  : "https://via.placeholder.com/200x150?text=No+Image"
              }
              alt={prod.Name}
              className="card-img-top"
              style={{ objectFit: "cover", height: "150px" }}
            /> */}
            <div className="card-body d-flex flex-column">
              <h4 className="card-title text-truncate text-center" title={prod.Name}>
                {prod.Name}
              </h4>
              <p className="card-text text-muted mb-1">
                Rs. {prod.Price.toFixed(2)}
              </p>
              <p className="card-text mb-1">⭐ {prod.Rating}</p>
              <p className="card-text small">{prod.Description}</p>
              <button className="btn btn-sm btn-warning mt-auto">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductDisplay;
