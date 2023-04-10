import React from "react";
import Slider from "react-slick";
import homeimage from '../../assets/homeimage.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';

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
  

  const Carousel = () => {
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
      <Slider {...settings}>
        <article>
            <img src={homeimage}   alt='image1' />
           <div className="slide-text">
            <h1 className="slide-title">Beyond Time</h1>
            <h2 className="slide-h2">Available Now</h2>
            <h3 className="slide-h3">only at ₹599</h3>
            <h2 className="slide-h22">Book Now</h2>
            <p className="slide-p">*termsandconditionsapply</p>
           </div>
           <div className="line1"></div>
           <div className="line2"></div>
            </article>
            <img src={homeimage} alt='image2' />
            <img src={homeimage} alt='image3' />
            
        
      </Slider>
    );
  };
  export default Carousel;