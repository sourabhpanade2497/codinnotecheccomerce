import React,{useState} from 'react';
import Header from '../Header/Header';
import CatagoriesCarousel from '../Carousel/CatagoriesCarousel';
import images from "./../Data/Catagoriesdata"

import "./Catagories.css"
import image from "./../Data/CatagoriesGrid"
import MensFashion from '../Data/MensFashion';
import MensFashionData from '../Data/MensFashionData';


function Catagories(){

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [selectedSuboption, setSelectedSuboption] = useState(null);
   ;

    const filterOptions = [
        { name: "Price", suboptions: ["Low to High", "High to Low"] },
        { name: "Latest", suboptions: ["Newest first", "Oldest first"] },
        { name: "Rating", suboptions: ["Highest rated", "Lowest rated"] },
        { name: "Brand", suboptions: ["Brand A", "Brand B", "Brand C"] },
        { name: "Color", suboptions: ["Red", "Green", "Blue"] },
        { name: "Size", suboptions: ["Small", "Medium", "Large"] },
        { name: "Offer", suboptions: [">20%", ">30%", ">50%"] }

      ]; 
      const handleFilterClick = (filterName) => {
        if (selectedFilter === filterName) {
          setSelectedFilter(null);
        } else {
          setSelectedFilter(filterName);
        }
        setSelectedSuboption(null);
      };
    
      const handleSuboptionClick = (suboptionName) => {
        setSelectedSuboption(suboptionName);
        setSelectedFilter(null);
      };
    
      const handlePlusIconClick = (event, filterName) => {
        event.stopPropagation();
        if (selectedFilter === filterName) {
            setSelectedFilter(null);
            setSelectedSuboption(null);
          } else {
            setSelectedFilter(filterName);
            setSelectedSuboption(null);
          }
      };  

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
      <div  key={image.id} 
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
    return(
        <div>
            <Header/>
            <CatagoriesCarousel/>
            <div className="catagories-title">Catagories</div>
            <div className="Catagories-image-slider">
      <div className="Catagories-image-style">
        {renderImageCards}
      </div>
      <div className="dot-container">
        {renderDots}
      </div>
    </div>
{/* Top Products */}
    <div className="top-products">
        Top Products
    </div>


    <div className="filter-menu" style={{ position: "relative" }}>
    <span class="material-symbols-outlined" onClick={() => handleFilterClick("filter")}>
filter_list
</span>
<div className="filter">
<h2>Filter</h2>
<div className="filter-line">
</div>
{selectedFilter === "filter" && (
    <ul style={{ listStyle: "none", paddingLeft: 0, position: "absolute", left: 35, top:250, lineHeight:2.2 }}>
      {filterOptions.map((filterOption) => (
        <li key={filterOption.name}>
          <div
            onClick={() => handleFilterClick(filterOption.name)}
            style={{ fontWeight: "bold" }}
          >
            {filterOption.name}
            <span
              className="plus-icon"
              onClick={(e) => handlePlusIconClick(e, filterOption.name)}
            >
              +
            </span>
          </div>
          
          <ul
          className={`sub-dropdown ${
              selectedSuboption === filterOption.name ? "visible" : ""
            }`}
            style={{ listStyle: "none", paddingLeft: 0}}>
            {filterOption.suboptions.map((suboption) => (
              <li key={filterOption.suboption}>
                <div onClick={() => handleSuboptionClick(suboption)}>
                  {filterOption.suboption}
                  </div>
                </li>
              ))}
            </ul>
        </li>
      ))}
    </ul>
  )}

</div>
    </div>
    <div className="catagories-grid">
    {image.map(image => (
      <div key={image.id}>
        <img src={image.image} alt={image.alt} />
        <h2>{image.id}</h2>
        <h3>{image.description}</h3>
      </div>
      ))}
    </div>


{/* Mens fashion */}
<div className="mens-fashion">
    Men's Fashion
</div>
<div className="view-all">
    View All
</div>

    <MensFashion/>

<MensFashionData/>

{/* Tops and tanks */}
<div className="topsandtank">
    Tops and Tanks
</div>
<div className="view-more">
    View More
</div>

        </div>
    );
}

export default Catagories;