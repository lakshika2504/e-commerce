import React from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import {Button} from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const HomeSectionCarosel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items:  5.5},
    };
    const items=[1,1,1,1,1].map((item)=><HomeSectionCard/>)
  return (
    <div className=" mx-10">
        <div className="relative p-5">
        <AliceCarousel
        autoPlay
        autoPlayInterval={800}
        animationDuration={1600}
        animationType="slide"
        items={items}
        infinite
        disableButtonsControls  
        disableDotsControls
        responsive={responsive}     
    />
    <Button variant="contained" className="z-50" 
    sx={{position:'absolute', backgroundColor:"green", '&:hover': {
          backgroundColor: 'darkred', // Dark red color on hover
        }, top:"8rem", right:"0rem", transform:"translatex( 50%) rotate(90deg)", }} aria-label="next">
    <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)", }}/>
    </Button>

    <Button variant="contained" className="z-50" 
    sx={{position:'absolute', backgroundColor:"green", '&:hover': {
          backgroundColor: 'darkred', // Dark red color on hover
        }, top:"8rem", left:"0rem", transform:"translatex(-50%) rotate(90deg)"}} aria-label="next">
    <KeyboardArrowRightIcon sx={{transform:"rotate(90deg)"}}/>
    </Button>
        </div>
    </div>
  )
}

export default HomeSectionCarosel