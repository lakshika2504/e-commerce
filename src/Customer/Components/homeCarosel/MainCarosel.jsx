import React from 'react';
import CroselData from './CroselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Mystyle={
    height:"590px",
    width:"1600px",    
}

const MainCarosel = () => {
    const items = CroselData.map((item) => (
        <img
            className="cursor-pointer -z-10"
            role="presentation"
            src={item.image}
            alt=""
            style={Mystyle}
        />
    ));

    return (
        <AliceCarousel
        items={items}
        autoPlay
        autoPlayInterval={800}
        animationDuration={1600}
        animationType="scroll"
        infinite
        disableButtonsControls       
    />
    );
};

export default MainCarosel;

