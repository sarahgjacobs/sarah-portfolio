import React from "react";
import { Link } from 'react-router-dom';


const Card = ({ image, title, description, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
      <button>Learn More</button>
    </a>
      </div>
    </div>
  );
};


export default Card;
