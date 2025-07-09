import React from "react";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div className="container-fluid mb-5">
      <Navbar/>
      <h2 className="text-center text-primary mb-4">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm p-4">
            <h5 className="mb-3">📍 Address</h5>
            <p>
              ShopSmart Pvt. Ltd. <br />
              123 E-Commerce Street, <br />
              Bengaluru, Karnataka, 560001, India
            </p>

            <h5 className="mt-4 mb-3">📞 Phone</h5>
            <p>
              Customer Care: <a href="tel:+919999999999">+91 99999 99999</a> <br />
              Office: <a href="tel:+918888888888">+91 88888 88888</a>
            </p>

            <h5 className="mt-4 mb-3">✉️ Email</h5>
            <p>
              Support: <a href="mailto:support@shopsmart.com">support@shopsmart.com</a> <br />
              Careers: <a href="mailto:hr@shopsmart.com">hr@shopsmart.com</a>
            </p>

            <h5 className="mt-4 mb-3">🌐 Follow Us</h5>
            <p>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <i className="bi bi-facebook me-2"></i>Facebook
              </a><br />
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <i className="bi bi-instagram me-2"></i>Instagram
              </a><br />
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin me-2"></i>LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
