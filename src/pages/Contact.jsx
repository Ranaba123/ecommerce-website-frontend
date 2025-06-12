import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={"CONTACT"} text2={"US"}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="Contact Us image" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-blue-900'>Our Company</p>
          <p className='text-orange-600'>322 Bandaranayake Mawatha, <br /> Moratuwa 10400 , Sri Lanka</p>
          <p className='text-orange-600'>Tel: (+94) 777-712-4382 <br /> Email:lightupcandles123@gmail.com</p>
          <p className='font-semibold text-xl text-blue-900'>Light up with fregrence</p>
          <p className='text-orange-600'>Learn more about our team and job openings.</p>
          <button className='border border-blue-900 px-8 py-4 text-sm hover:bg-blue-900 hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact