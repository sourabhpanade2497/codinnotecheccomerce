/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from "react";
import "./Home.css";

import images from "../Data/Data";
import Carousel from './../Carousel/Carousel';
import 'react-simple-carousel-image-slider/dist/index.css'

import "@fontsource/poppins";
import "@fontsource/quattrocento";
import MyCarousel from "../Carousel/MyCarousel";
import Gridimage from "../GridImage/Gridimage";

import Header from "../Header/Header";
import CustomHomeGrid from "../Data/CustomHomeGrid";
import Topproductshome from "../Data/Topproductshome";
function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  const handleImageClick = (index,event) => {
    const imageBounds = event.target.getBoundingClientRect();
    const x = event.clientX - imageBounds.left;
    const y = event.clientY - imageBounds.top;
    setSelectedIndex(index);
    setDotPosition({ x, y });
  };
  const handleDotClick = (event) => {
    const imageBounds = event.target.parentNode.getBoundingClientRect();
    const x = event.clientX - imageBounds.left;
    const y = event.clientY - imageBounds.top;
    setDotPosition({ x, y });
  };

  const renderImageCards= images.map((image,index) => (
    <div key={image.id} 
    className={`image-card ${index === selectedIndex ? 'selected' : 'not-selected'}`}
    onClick={(event) => handleImageClick(index, event)}>
      
      <img  src={image.image} alt={image.description}/>
      {index === selectedIndex && (
          <div
            className="dot"
            style={{ left: dotPosition.x, top: dotPosition.y }}
            onClick={handleDotClick}
          ></div>
        )}
      <h2>{image.description}</h2>
     </div>  
     
    ));
    const renderDots = images.map((image,index) => (
        <div
          key={image.id}
          className={`dot ${index === selectedIndex ? 'selected' : 'not-selected'}`}
          style={{ left: dotPosition.x, top: dotPosition.y }}
          onClick={(event) => handleImageClick(index,event)}>
            <span className="dot-inner"></span>
          </div>
      
      ));
  
    
  return (
    <div>
      <div className="Header">
        <Header/>
      </div>
     <div className="home-image">
   <Carousel/>
     </div>  
     <div className="catagories-home">
      <h2>Catagories</h2>
     </div>

     <div className="image-slider">
      <div className="image-style">
        {renderImageCards}
      </div>
      <div className="dot-container">
        {renderDots}
      </div>
    </div>

    <div className="new-arrival-home">
    New Arrivals
    </div>

    <div className="arrival-products">
      <MyCarousel/>
    </div>

    <div className="fashion-home">
    Fashion
    </div>
    <div className="view-more-home">
    View More
    </div>
    <div className="filter-icon1">
      <span class="material-symbols-outlined">
filter_list
</span>
    </div>

    <div className="grid">
      <Gridimage/>
    </div>
    <div className="custom-grid-home">
    <CustomHomeGrid/>
    </div>

    <div className="topproducthome">
      Top Product
    </div>

    <div className="view-more-home2">
    View More
    </div>
    
    <Topproductshome/>

    <div className="Allproducthome">
     All Product
    </div>

    <div className="view-more-home3">
    View More
    </div>
    </div>
  );
}

export default Home;
