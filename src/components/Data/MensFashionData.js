import React,{useState,useEffect} from 'react'
import mensfashionimages from "../../assets/mensimage9.png"
import darkbackground from "../../assets/blackbackground.png"
import dresscombo from "../../assets/dresscombo.png"
const mensimages = [{
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/mensimage5.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/mensimage6.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/mensimage7.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/mensimage8.png")
    }
]

const topstanks =[{
    "id": "Product",
    "description": "₹ 5999",
    "src": require("../../assets/topsimage1.png")
},
{
    "id": "Product",
    "description": "₹ 5999",
    "src": require("../../assets/topsimage2.png")
},
{
    "id": "Product",
    "description": "₹ 5999",
    "src": require("../../assets/topsimage3.png")
},
{
    "id": "Product",
    "description": "₹ 5999",
    "src": require("../../assets/topsimage4.png")
},
{
    "id": "Product",
    "description": "₹ 5999",
    "src": require("../../assets/topsimage5.png")
},
{
    "id": "Product",
    "description": "₹ 5999",
    "src": require("../../assets/topsimage6.png")
},
{
    "id": "Product",
    "description": "₹ 5999",
    "src": require("../../assets/topsimage7.png")
},
{
    "id": "Product",
    "description": "₹ 5999",
    "src": require("../../assets/topsimage8.png")
}

]
const mensclothing =[{
    "id": "Product",
    "description": "₹ 5999",
    "src": require("../../assets/menclothingimage1.png")
},
{
    "id": "Product",
    "description": "₹ 5999",
    "src": require("../../assets/menclothingimage2.png")
},
{
    "id": "Product",
    "description": "₹ 5999",
    "src": require("../../assets/menclothingimage3.png")
},
{
    "id": "Product",
    "description": "₹ 5999",
    "src": require("../../assets/menclothingimage4.png")
},
{
    "id": "Product",
    "description": "₹ 5999",
    "src": require("../../assets/menclothingimage5.png")
},
{
    "id": "Product",
    "description": "₹ 5999",
    "src": require("../../assets/menclothingimage6.png")
},
{
    "id": "Product",
    "description": "₹ 5999",
    "src": require("../../assets/menclothingimage7.png")
},
{
    "id": "Product",
    "description": "₹ 5999",
    "src": require("../../assets/menclothingimage8.png")
}

]

const allproductsimages=[
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/allproductimage1.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/allproductimage2.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/allproductimage3.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "src": require("../../assets/allproductimage4.png")
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




function MensFashionData() {
     // State variables to hold the countdown time
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Calculate the remaining time until the countdown date
  useEffect(() => {
    const countdownDate = new Date('2023-04-30T00:00:00Z');
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      setDays(String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0'));
      setHours(String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'));
      setMinutes(String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'));
      setSeconds(String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0'));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <div className="mensfashiondata1">
    {mensimages.map(images => (
        <div key={images.id}>
            <img src={images.src} alt={images.alt} />
            <h2>{images.id}</h2>
        <h3>{images.description}</h3>
        </div>
    
    
    ))}
    </div>

<div className="mensfashiondataimage">
 <div className="timer">

 <p>{days} <br/> <span className='span-tag'> days</span></p>
      <p>{hours} <br/> <span className='span-tag'> Hr</span></p>
      <p>{minutes}<br/> <span className='span-tag'>Min</span></p>
      <p>{seconds}<br/> <span className='span-tag'>Sec</span></p>
 </div>
    <img src={mensfashionimages} alt="" />
</div>

<div className="mensfashiontext">
    <h2>Stay</h2>
    <h1>Beautiful</h1>
    <div className="image-disc"></div>
    <div className="sale">
    <p>50% 
        <span>
             off
            </span>
             </p>
    </div>
</div>
<div className="topsntanks">
{topstanks.map(data => (
        <div key={data.id}>
            <img src={data.src} alt={data.alt} />
            <h2>{data.id}</h2>
        <h3>{data.description}</h3>
        </div>
    
    
    ))}

</div>

<div className="dark-thumbnail">
    <img src={darkbackground} alt="darkbackground" />
    <div className="inside-dresscombo">
        <img src={dresscombo} alt="dresscombo" />
    </div>

    <div className="thumbnail-text">
        <h2>#fashionnow</h2>
        <h1>Select Your<br/><span>Style</span></h1>
        <div className="text-line"></div>
        <div className="text-line2"></div>
        <h3>Shop Now</h3>
    </div>
</div>

{/* All Products */}
<div className="mens-clothing">
    Men's Clothing
</div>
<div className="view-more2">View More</div>

<div className="mensclothing-grid">
{mensclothing.map(data1 => (
        <div key={data1.id}>
            <img src={data1.src} alt={data1.alt} />
            <h2>{data1.id}</h2>
        <h3>{data1.description}</h3>
        </div>
    
    
    ))}
</div>

<div className="allproducts">
    All Products
</div>
<div className="view-more3">View More</div>
<div className="allproducts-grid">
{allproductsimages.map(data1 => (
        <div key={data1.id}>
            <img src={data1.src} alt={data1.alt} />
            <h2>{data1.id}</h2>
        <h3>{data1.description}</h3>
        </div>
    
    
    ))}
</div>

</>


  )
}

export default MensFashionData;