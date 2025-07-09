import "../App.css";
import ProductDisplay from "./ProductDisplay";

function HomeCategoryDisplay({ categories }) {
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        {categories.map((cat, index) => (
          <div className="col-md-6 mb-4 d-flex" key={index}>
            <div className="card shadow h-100 w-100">
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

export default HomeCategoryDisplay;
