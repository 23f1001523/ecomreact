import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState(""); 
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwords = {
      admin: "admin",
      user: "password",
    };

    if (password === passwords[userType]) {
      alert(`Welcome ${userType.charAt(0).toUpperCase() + userType.slice(1)}!`);
      sessionStorage.setItem('user',userType);
      if(userType==='admin'){
          navigate("/admindashboard");
      }else{
          navigate('/')
      }

    } else {
      setError("Invalid password");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5 shadow-lg rounded-3 p-4 bg-white">
            <h2 className="text-center mb-3">Login</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="userType" className="form-label">
                  Select User Type
                </label>
                <select
                  id="userType"
                  className="form-select"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <option value="">Select User</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock-fill"></i>
                  </span>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              {/* Submit button */}
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  <i className="bi bi-box-arrow-in-right me-2"></i> Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
