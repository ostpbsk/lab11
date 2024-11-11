import React from "react";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = () => {
  const cardData = [
    {
      imgSrc:
        "https://i.scdn.co/image/ab67616d0000b2735c53799f473fa3e1a48c00ed",
      title: "New Releases",
      text: "Discover the latest hits and albums from top artists around the world.",
      linkText: "Explore New Releases",
    },
    {
      imgSrc:
        "https://i.scdn.co/image/ab67616d0000b27350d216aebaf98e8ac9947fd5",
      title: "Genres",
      text: "Browse by genre and find music that suits every mood and moment.",
      linkText: "Browse Genres",
    },
    {
      imgSrc:
        "https://yt3.googleusercontent.com/w23P-nr7I2D7Qjb8UhGEQIl-TWJpxjXmuHuqOam8WjSHsFWn0TUe3CtUr3d-At4C0Eog5gUrIg=s900-c-k-c0x00ffffff-no-rj",
      title: "Featured Artists",
      text: "Discover tracks and albums from our curated selection of featured artists.",
      linkText: "Meet the Artists",
    },
  ];

  return (
    <section className="card-section container my-5">
      <div className="text-center mb-4">
        <h2 className="display-4 fw-bold text-dark">Listen with us to:</h2>
      </div>
      <div className="row">
        {cardData.map((card, index) => (
          <Card
            key={index}
            imgSrc={card.imgSrc}
            title={card.title}
            text={card.text}
            linkText={card.linkText}
          />
        ))}
      </div>
    </section>
  );
};

export default Cards;
