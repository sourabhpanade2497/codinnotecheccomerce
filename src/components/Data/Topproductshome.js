import React from 'react'


const topproductshomeimage = [{
    "id": "Product",
    "description": "₹ 5999",
    "src": require("../../assets/topproducthome1.png")
},
{
    "id": "Product",
    "description": "₹ 5999",
    "src": require("../../assets/topproducthome2.png")
},
{
    "id": "Product",
    "description": "₹ 5999",
    "src": require("../../assets/topproducthome3.png")
},
{
    "id": "Product",
    "description": "₹ 5999",
    "src": require("../../assets/topproducthome4.png")
},
{
    "id": "Product",
    "description": "₹ 5999",
    "src": require("../../assets/topproducthome5.png")
},
{
    "id": "Product",
    "description": "₹ 5999",
    "src": require("../../assets/topproducthome6.png")
},
{
    "id": "Product",
    "description": "₹ 5999",
    "src": require("../../assets/topproducthome7.png")
},
{
    "id": "Product",
    "description": "₹ 5999",
    "src": require("../../assets/topproducthome8.png")
}
] 


const allproductshomeimages=[
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/topproducthome1.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/topproducthome2.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/topproducthome3.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/topproducthome4.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/topproducthome5.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/topproducthome6.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/topproducthome7.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/topproducthome8.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/image1.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/image2.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/image3.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/image4.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/image5.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/image6.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/image7.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/image8.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/image9.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/image10.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/image11.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/image12.png")
    }
]



function Topproducthome() {
  return ( 
    <>
    <div  className='topproductshome'>
        {topproductshomeimage.map(data => (
        <div key={data.id}>
            <img src={data.src} alt={data.alt} />
            <h2>{data.id}</h2>
        <h3>{data.description}</h3>
        </div>
    
    
    ))}
    
    </div>


    <div className="allproductshomeimages">
             {allproductshomeimages.map(data2 => (
        <div key={data2.id}>
            <img src={data2.src} alt={data2.alt} />
            <h2>{data2.id}</h2>
        <h3>{data2.description}</h3>
        </div>
    
    
    ))}
    </div>

    
    </>

  )
}

export default Topproducthome