import React from 'react'

function MensFashion() {
    const mensimage = [{
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/mensimage1.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/mensimage2.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/mensimage3.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/mensimage4.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/mensimage4.png")
    }

]


  return (
    <div className="mensfashiondata"
    
    >
    {mensimage.map(images => (
        <div key={images.id}>
            <img src={images.src} alt={images.alt} />
            <h2>{images.id}</h2>
        <h3>{images.description}</h3>
        </div>
    ))}
</div>
  );
    }
export default MensFashion;





