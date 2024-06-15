import React from 'react';

const HomeSectionCard = ({ image, title, description }) => {
  return (
    <div className='relative backdrop-blur-md bg-black/5 backdrop-blur-sm cursor-pointer flex flex-col items-center
     rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border hover:bg-blue-200 
     transform transition-transform duration-300 hover:scale-105 hover:z-10'>

      <div className='h-[15rem] w-[13rem]'> 
        <img className='object-cover object-top w-full h-full'
          src={image} alt={title} />
      </div>

      <div className='p-4 '>
        <h3 className='text-lg font-medium text-gray-900'>{title}</h3>
        <p className='mt-2 text-sm text-gray-500 border border-gray-400 rounded-lg p-2'>{description}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
