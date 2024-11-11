import React, { useState } from 'react';
import './Hero.css';
import Cards from '../Cards/Cards';
import FeaturedSection from '../FeaturedSection/FeaturedSection';

const Hero = () => {
  const [showSections, setShowSections] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleShowSections = () => {
    setShowSections(true);
    setAnimate(true);
  };

  return (
    <>
      <div className="hero-section text-white py-5">
        <div className="container text-center hero-content">
          <h1 className="display-4 animated-heading">Discover & Own the Music You Love</h1>
          <p className="lead mt-3 animated-subtext">
            Welcome to VibeWave, your go-to platform for exclusive music clips from artists around the world. Find your favorite tracks, support the artists, and own high-quality music at the best prices.
          </p>
          <div className="mt-4">
            <button className="btn btn-dark btn-lg me-3 animated-button" onClick={handleShowSections}>
              View More
            </button>
          </div>
        </div>
      </div>
      
      {showSections && (
        <>
          <div className={`animated-section ${animate ? 'fade-slide-in' : ''}`}>
            <Cards />
          </div>
          <div className={`animated-section ${animate ? 'fade-slide-in' : ''}`}>
            <FeaturedSection />
          </div>
        </>
      )}
    </>
  );
};

export default Hero;
