// import { useState, useEffect } from 'react';
// import { bannerImg } from '../constants';
// import { Button } from './index';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % bannerImg.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <div className='relative w-full h-[600px] overflow-hidden rounded-3xl'>
//       {bannerImg.map((banner, index) => (
//         <div
//           key={banner.alt}
//           className={`absolute inset-0 flex justify-center items-center transition-opacity duration-700 ease-in-out ${
//             index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
//           }`}
//         >
//           <div className='w-3/4 md:w-1/2 text-center md:text-left'>
//             <h1 className='text-5xl md:text-7xl font-bold'>{banner.title}</h1>
//             <p className='text-lg md:text-2xl mt-4'>{banner.description}</p>
//             <Button label='Shop now' className='mt-4' />
//           </div>
//           <img src={banner.img} alt={banner.alt} className='w-1/2 md:w-1/3 object-contain' />
//         </div>
//       ))}
//       <button onClick={() => setCurrentIndex((prev) => (prev === 0 ? bannerImg.length - 1 : prev - 1))} className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white'>
//         <FaChevronLeft size={24} />
//       </button>
//       <button onClick={() => setCurrentIndex((prev) => (prev + 1) % bannerImg.length)} className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white'>
//         <FaChevronRight size={24} />
//       </button>
//     </div>
//   );
// };

// export default Hero;

import  {useState, useEffect } from 'react'
import { bannerImg } from "../constants"
import { Button } from './index'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % bannerImg.length
    );
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? bannerImg.length - 1 : prevIndex - 1
    );
  }

  return (
      <div className='relative w-full h-[500px] overflow-hidden'>
        <div 
          className='relative w-full h-full'>
            {bannerImg.map((banner, index) => (
              <div 
                key={banner.alt} 
                className={`flex justify-around items-center p-8 absolute w-full h-full transition-opacity duration-700 ease-in-out 
                  ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                <div className='w-2/3 md:w-1/2 z-10'>
                  <h1 className='mt-4 text-xl xl:text-[50px] leading-normal font-bold font-montserrat'>{banner.title}</h1>
                  <p className='mt-4 text-md xl:text-2xl'>{banner.description}</p>
                  <Link to='/product'>
                    <div className='mt-4 md:mt-8'>
                      <Button 
                        label='Shop now' 
                        fontFamily='font-cookie text-[30px] xl:text-3xl'
                        size='w-40 h-[60px] md:w-48 md:h-20' />
                    </div>
                  </Link>
                </div>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gray-400 bg-opacity-50"></div>
                <img 
                  src={banner.img}
                  alt={banner.alt}
                  className='object-contain w-1/3 h-full z-10' 
                />
              </div>
            ))}
          </div>
            {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition z-20'>
              <FaChevronLeft size={24} />
          </button>
            {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition z-20'>
              <FaChevronRight size={24} />
          </button>
            {/* Dots Indicator */}
          <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20'>
            {bannerImg.map((_, index) => (
              <span
                key={index}
                className={`h-3 w-3 rounded-full bg-white transition 
                  ${index === currentIndex ? 'bg-opacity-100' : 'bg-opacity-50'}`}></span>
            ))}
          </div>
      </div>
    // </div>
  )
}

export default Hero