import image from "./../Data/MyData";
import "./MyCarousel.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  
  const MyCarousel = () => {
    return (
        <Carousel responsive={responsive}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        
        >
        {image.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.title} />
            <h2>{item.id}</h2>
            <h3 className="price">{item.description}</h3>


          </div>
        ))}
      </Carousel>
        
    );
  };

  export default MyCarousel;