import { useState, useEffect } from "react";
import "../App.css";
import InitialCatalogue from "../database/Catalogue";
import ProductDisplay from "./ProductDisplay";

function CategoryDisplay() {
  const [catalogue, setCatalogue] = useState(() => {
    const saved = localStorage.getItem("catalogue");
    return saved ? JSON.parse(saved) : InitialCatalogue;
  });

  useEffect(() => {
    localStorage.setItem("catalogue", JSON.stringify(catalogue));
  }, [catalogue]);

 
  const categories = catalogue.map((cat) => cat.Category);
 
  const products = catalogue.flatMap((cat) =>
    cat.Products.map((prod) => ({
      ...prod,
      category: cat.Category,
    }))
  );

  return (
  <div className="container py-4">
    <div className="row justify-content-center">
      {catalogue.map((cat, index) => (
        <div
          className="col-md-6 mb-4 d-flex" // add d-flex here to make column flex container
          key={index}
        >
          <div className="card shadow h-100 w-100"> {/* add h-100 to card */}
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">{cat.Category}</h4>
            </div>
            <div className="card-body d-flex flex-column">
              <ProductDisplay products={cat.Products} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

}

export default CategoryDisplay;
