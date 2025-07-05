import React from "react";
import Carousel from "./Carousel";

function HeroSection() {
 return (
  <div>
      <div className="mb-2">
         <Carousel/>
      </div>

     <div className="bg-primary text-white text-center py-5">
      <h1 className="display-4 fw-bold">Biggest Sale of the Season!</h1>
      <p className="lead">Get up to 50% off on selected items</p>
      <button className="btn btn-outline-light mt-3">Shop Now</button>

      </div>
      
    </div>
  );
}

export default HeroSection;
