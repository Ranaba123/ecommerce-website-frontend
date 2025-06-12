import React from 'react'
import { assets } from './../assets/assets';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
            <Link to='/' onClick={scrollToTop}><img src={assets.logo} className='mb-5 w-32 cursor-pointer' alt=" Logo image" /></Link>
              <p className='w-full md:w-2/3 text-blue-800'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eaque quod eveniet necessitatibus
              </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5 text-blue-900'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-blue-800'>
                    <NavLink to={'/'} onClick={scrollToTop}  className='noHover cursor-pointer'><li>Home</li></NavLink>
                    <NavLink to={'/about'} onClick={scrollToTop} className='noHover cursor-pointer'><li>About Us</li></NavLink>
                    <NavLink className='noHover cursor-pointer'><li>Delivery</li></NavLink>
                    <NavLink className='noHover cursor-pointer'><li>Privacy Policy</li></NavLink>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5 text-blue-900'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-blue-800'>
                    <li><p>Hotline : <a className='text-blue-700' href='tel:+94 760 5039'>+94 760 5039</a></p></li>
                    <li><p>Email: <a className='text-blue-700' href='mailto:your-email@gmail.com'>your-email@gmail.com</a></p></li>

                </ul>
            </div>
        </div>
          <div>
            <hr />
            <p className='py-5 text-sm text-center text-blue-900'>Copyright  2024@  LightupCandles.com - All Right Reserved.</p>
          </div>
    </div>
  )
}

export default Footer