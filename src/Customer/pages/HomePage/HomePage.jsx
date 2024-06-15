import React from 'react'
import MainCarosel from '../../Components/homeCarosel/MainCarosel'
import HomeSectionCarosel from '../../Components/HomeSectionCarosel/HomeSectionCarosel'
import Fruits from '../../../Data/Fruits'

const HomePage = () => {
  return (
    <div>
        <MainCarosel/>
        <div className='space-y-10 py-20 flex flex-col justify center px-5 lg:px-10'>
            <HomeSectionCarosel data={Fruits} sectionName={"Fruits"}/>
            <HomeSectionCarosel data={Fruits} sectionName={"Vegetables"}/>
            <HomeSectionCarosel data={Fruits} sectionName={"Medicines"}/>
            <HomeSectionCarosel data={Fruits} sectionName={"Biscuits"}/>
            <HomeSectionCarosel data={Fruits} sectionName={"Stationary"}/>
        </div>
    </div>
  )
}

export default HomePage