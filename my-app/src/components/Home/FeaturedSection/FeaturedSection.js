import React from "react";
import "./FeaturedSection.css";

const FeaturedSection = () => {
  return (
    <section className="featured-section my-5 py-5 text-center text-light">
      <div className="container">
        <h2 className="display-4 fw-bold mb-4">
          Curated Collections Just for You
        </h2>
        <p className="lead mb-5">
          Dive into our exclusive collections that bring the best of music
          directly to your ears. Whether you love timeless classics or today's
          chart-toppers, we have something for everyone.
        </p>

        <div className="row">
          <div className="col-md-4">
            <div className="featured-card p-4 shadow-lg">
              <h3 className="h4 fw-semibold">Top 50 Hits</h3>
              <p>
                Stay updated with the latest and most popular tracks across
                genres.
              </p>
              <a href="#" className="btn btn-dark mt-2">
                Listen Now
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="featured-card p-4 shadow-lg">
              <h3 className="h4 fw-semibold">Relax & Unwind</h3>
              <p>Handpicked tunes for a laid-back and relaxing experience.</p>
              <a href="#" className="btn btn-dark mt-2">
                Explore
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="featured-card p-4 shadow-lg">
              <h3 className="h4 fw-semibold">Throwback Hits</h3>
              <p>Take a nostalgic trip with hits from the past few decades.</p>
              <a href="#" className="btn btn-dark mt-2">
                Take Me Back
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
