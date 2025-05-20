import React from 'react'
import { assets } from './../assets/assets';
import Slider from 'react-slick';



const Hero = () => {
    const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/* Left Side Hero */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#002060]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#002060]'></p>
                    <p className='font-medium text-sm md:text-base'>OUR BEST SELLERS</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[2px] bg-[#002060]'></p>
                </div>

            </div>

        </div>
        {/* Right Side Hero */}
      
        <img src={assets.hero_img} className='w-full sm:w-1/2' alt="" />
        
        
    </div>
  )
}

export default Hero