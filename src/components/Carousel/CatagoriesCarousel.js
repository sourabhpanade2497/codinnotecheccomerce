import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Catagoriesimage from "../../assets/CatagoriesImage.png"
import "./CatagoriesCarousel.css"


const PrevArrow = props => (
    <button {...props}>
      <i className="fas fa-angle-left"></i>
    </button>
  );
  
  const NextArrow = props => (
    <button {...props}>
      <i className="fas fa-angle-right"></i>
    </button>
  );
  

  const CatagoriesCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true, // enable arrows navigation
      prevArrow: <PrevArrow />, // custom previous arrow component
      nextArrow: <NextArrow />, // custom next arrow component
    };

    
  
    return (
      <>
      <Slider {...settings}>
        <article>
            <img src={Catagoriesimage}   alt='image1' />
           <div className="slide-text">
            <h2>Have Your Own</h2>
            <h1 >Collection</h1>
           </div>
            </article>
            <img src={Catagoriesimage} alt='image2' />
            <img src={Catagoriesimage} alt='image3' />
            
        
      </Slider>

      

      
      </>
    );
  };
export default CatagoriesCarousel