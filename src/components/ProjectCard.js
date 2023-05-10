import React from "react";
import PropTypes from "prop-types";

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};


export default Card;
