import React from "react";
import "./Card.css";

const Card = ({ imgSrc, title, text, linkText }) => {
  return (
    <div className="col-md-4">
      <div className="card shadow-lg">
        <img src={imgSrc} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#!" className="btn btn-dark">
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
