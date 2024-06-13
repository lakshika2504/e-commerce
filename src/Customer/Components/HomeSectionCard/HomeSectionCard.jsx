import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center
     bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-black'>

        <div className='h-[15rem] w-[13rem]'> 
            <img className='object-cover object-top w-full h-full'
             src="images/Default_single_red_apple_3.jpg" alt=""/>
        </div>

        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'> Apple </h3>
            <p className='mt-2 text-sm text-gray-500'> Red and fresh apple</p>
        </div>
    </div>
  )
}

export default HomeSectionCard