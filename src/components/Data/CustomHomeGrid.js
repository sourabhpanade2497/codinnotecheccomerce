import React,{useState,useEffect} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import customgridimage from "../../assets/custom5.png"
import homecarousel1 from "../../assets/homecarousel1.png"
import homecarousel2 from "../../assets/homecarousel2.png"
import homecarousel3 from "../../assets/homecarousel3.png"

function CustomHomeGrid() {
    const gridimage = [{
        "id": "Product",
        "description": "₹ 5999",
        "image": require("../../assets/custom1.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "image": require("../../assets/custom2.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "image": require("../../assets/custom3.png")
    },
    {
        "id": "Product",
        "description": "₹ 5999",
        "image": require("../../assets/custom4.png")
    }
    ];
    
        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '160px',
          variableHeight: true,
        }
      // State variables to hold the countdown time
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Calculate the remaining time until the countdown date
  useEffect(() => {
    const countdownDate = new Date('2023-04-20T00:00:00Z');
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
        <div className="customhomegrid">
        {gridimage.map(data1 => (
        <div key={data1.id}>
            <img src={data1.image} alt={data1.alt} />
            <h2>{data1.id}</h2>
        <h3>{data1.description}</h3>
        </div>
    
    
    ))}
        </div>

        <div className="side-grid">
        <div className="timer-grid">

<p>{days} <br/> <span className='span-tag'> days</span></p>
     <p>{hours} <br/> <span className='span-tag'> Hr</span></p>
     <p>{minutes}<br/> <span className='span-tag'>Min</span></p>
     <p>{seconds}<br/> <span className='span-tag'>Sec</span></p>
</div>
            <img src={customgridimage} alt="customgridimage" />
        </div>

        <div className="side-grid-text">
    <h2>Stay</h2>
    <h1>Fearless</h1>
    <div className="image-semi"></div>
    <div className="grid-sale">
    <p>50% 
        <span>
             off
            </span>
             </p>
    </div>
</div>

<Slider className='slider-images' {...settings}>
      <div>
        <img src={homecarousel1} alt="image1"  width="300px" height="200px"/>
      </div>
      <div>
        <img src={homecarousel2} alt="image2" width="300px" height="200px"/>
      </div>
      <div>
        <img src={homecarousel3} alt="image3" width="300px" height="200px"/>
      </div>
      <div>
        <img src={homecarousel2} alt="image4" width="300px" height="20px"/>
      </div>
    </Slider>
    </>
  )
}

export default CustomHomeGrid;