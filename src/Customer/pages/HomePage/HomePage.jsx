import React from 'react'
import MainCarosel from '../../Components/homeCarosel/MainCarosel'
import HomeSectionCarosel from '../../Components/HomeSectionCarosel/HomeSectionCarosel'

const HomePage = () => {
  return (
    <div>
        <MainCarosel/>
        <div className='space-y-10 py-20 flex flex-col justify center'>
            <HomeSectionCarosel/>
            <HomeSectionCarosel/>
            <HomeSectionCarosel/>
            <HomeSectionCarosel/>
            <HomeSectionCarosel/>
        </div>
    </div>
  )
}

export default HomePage