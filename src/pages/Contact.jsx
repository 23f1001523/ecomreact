import React from "react";
<<<<<<< Updated upstream
import Navbar from "../components/Navbar";
=======
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
>>>>>>> Stashed changes

function Contact() {

const navigate=useNavigate();
const handleBackClick= ()=>{
    navigate('/');
}
  return (
    <div className="container-fluid mb-5">
<<<<<<< Updated upstream
      <Navbar/>
=======
        <Navbar/>
>>>>>>> Stashed changes
      <h2 className="text-center text-primary mb-4">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm p-4">
            <h5 className="mb-3">📍 Address</h5>
            <h6>
              ShopSmart Pvt. Ltd. <br />
              123 E-Commerce Street, <br />
              Bengaluru, Karnataka, 560001, India
            </h6>

            <h5 className="mt-4 mb-3">📞 Phone</h5>
            <h6>
              Customer Care: <a href="tel:+919999999999">+91 99999 99999</a> <br />
              Office: <a href="tel:+918888888888">+91 88888 88888</a>
            </h6>

            <h5 className="mt-4 mb-3">✉️ Email</h5>
            <h6>
              Support: <a href="mailto:support@shopsmart.com">support@shopsmart.com</a> <br />
              Careers: <a href="mailto:hr@shopsmart.com">hr@shopsmart.com</a>
            </h6>

            <h6 className="mt-4 mb-3">🌐 Follow Us</h6>
            <h6>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <i className="bi bi-facebook me-2"></i>Facebook
              </a><br />
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <i className="bi bi-instagram me-2"></i>Instagram
              </a><br />
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin me-2"></i>LinkedIn
              </a>
            </h6>
            <button className='btn btn-danger mt-3 d-flex justify-content-center align-items-center' style={{ width: "200px", maxWidth: "90vw" }} onClick={handleBackClick}>Back </button>
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
}

export default Contact;
