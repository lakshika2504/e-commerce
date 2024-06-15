import React, { useRef } from 'react';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import 'react-alice-carousel/lib/alice-carousel.css';

const HomeSectionCarousel = ({data , sectionName}) => {
  const carouselRef = useRef(null); // Reference to access the carousel instance

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  // Create carousel items based on the Fruits data
  const items = data.map((Fruit, index) => (
    <HomeSectionCard
      key={index}
      image={Fruit.image}
      title={Fruit.title}
      description={Fruit.description}
    />
  ));

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  return (
    <div className="relative px-4 lg:px-8 ">
  <h2 className='text-3xl font-extrabold py-5 text-gray-800 shadow-lg tracking-wide'>
  {sectionName}
</h2>


      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef} // Attach the reference to the carousel
          animationDuration={1600}
          animationType="slide"
          items={items}
          infinite
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
        />
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <Button onClick={slidePrev}>
            <KeyboardArrowLeftIcon />
          </Button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <Button onClick={slideNext}>
            <KeyboardArrowRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
