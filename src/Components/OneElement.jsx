import React from "react";
import "./OneElement.css";
export default function OneElement({ image, nom, prix }) {
  return (
    <div className="card">
      <div className="card_image">
        <img src={image} alt={nom} />
      </div>
      <div className="card_info">
        <h2>{nom}</h2>
        <h3>${prix.toLocaleString()}</h3>
      </div>
    </div>
  );
}
