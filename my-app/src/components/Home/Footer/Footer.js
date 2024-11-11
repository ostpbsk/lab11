import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start footer-dark">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">VibeWave</h5>
            <p className="text-light">
              Discover and share music with VibeWave — where sound meets soul.
              Join the wave, feel the vibe, and let the rhythm take control.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase text-light">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-muted">
                  About Us
                </a>
              </li>
              <li>
                <a href="#!" className="text-muted">
                  Services
                </a>
              </li>
              <li>
                <a href="#!" className="text-muted">
                  Contact
                </a>
              </li>
              <li>
                <a href="#!" className="text-muted">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase text-light">Follow Us</h5>
            <ul className="list-unstyled d-flex justify-content-around">
              <li>
                <a href="#!" className="text-muted">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#!" className="text-muted">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#!" className="text-muted">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#!" className="text-muted">
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3 footer-dark-bottom">
        © {new Date().getFullYear()} WibeWave. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
