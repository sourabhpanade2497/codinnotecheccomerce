import React from 'react'
import "./CustomGrid.css";
import images from "./../Data/CustomGrid"
export default function CustomGrid() {
  return (
    <div className="grid-container">
    {images.slice(0,4).map(image => (
      <div key={image.id}>
        <img src={image.image} alt={image.alt} />
        <h2>{image.id}</h2>
        <h3>{image.description}</h3>
      </div>
    ))}
    </div>
  );
}

