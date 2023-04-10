import React from 'react'
import images from './../Data/GridData';
import './GridImage.css';
export default function Gridimage() {
  return (
    <div className="grid-container">
    {images.map(image => (
      <div key={image.id}>
        <img src={image.image} alt={image.alt} />
        <h2>{image.id}</h2>
        <h3>{image.description}</h3>
      </div>
    ))}
  </div>
);
}

