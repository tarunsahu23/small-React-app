// src/BeerCard.js
import React from 'react';
import './BeerCard.css'; // Import your custom BeerCard styles

const BeerCard = ({ beer }) => {
  return (
    <div className="beer-card card">
      <img src={beer.image_url} alt={beer.name} className="card-img-top" />
      <div className="card-body">
        <h3 className="card-title">{beer.name}</h3>
        <p className="card-text">{beer.tagline}</p>
      </div>
    </div>
  );
};

export default BeerCard;
