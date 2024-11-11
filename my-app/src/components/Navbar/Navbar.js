import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
          VibeWave
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link custom-nav-link" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/catalog" className="nav-link custom-nav-link">
                Catalog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link custom-nav-link">
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
