import React from 'react';

function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/assets/images/herosection/image1.jpg" className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
            
          <img src="/assets/images/herosection/image7.jpg" className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="/assets/images/herosection/image3.jpg" className="d-block w-100" alt="Slide 3" />
        </div>
          <div className="carousel-item">
          <img src="/assets/images/herosection/image6.jpg" className="d-block w-100" alt="Slide 3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
