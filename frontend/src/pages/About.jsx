import React from 'react'
import Title from '../components/Title'
import { assets } from './../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={"US"} />

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className="w-full md:max-w-[450px] rounded" src={assets.logo1} alt="about us image" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-blue-900'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corrupti saepe et odit sit magni aperiam labore temporibus dicta pariatur iste esse fuga voluptatem alias eum molestiae voluptatum, provident sequi!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente omnis nemo provident, molestiae dolorum magni accusamus aliquid rem illo et sunt illum beatae? Repudiandae id molestias accusamus laborum, porro enim?</p>
            <b className='text-blue-900'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore officiis, est libero eveniet mollitia itaque tempora incidunt voluptatum quaerat tempore dolorum repellendus repellat rerum recusandae vero. Dolor, dolores veritatis.</p>
          </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={"CHOOSE US"}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-orange-600'>Quality Assurance:</b>
          <p className='text-blue-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, amet. Ullam eius alias voluptates! Corporis molestias illo, ea quis voluptas temporibus dolor accusamus. Sunt repellat obcaecati quam impedit laboriosam sint.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-orange-600'>Convenience:</b>
          <p className='text-blue-900'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel praesentium id sunt voluptas velit rerum animi numquam, reiciendis beatae amet repellendus eligendi, asperiores enim tempora optio blanditiis sed aliquam voluptatum?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-orange-600'>Exceptional Customer Service:</b>
          <p className='text-blue-900'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis, molestias soluta modi ex, corporis tenetur laborum minima cum doloribus minus eaque deserunt officiis, cumque numquam. Dolorum harum velit totam?</p>
        </div>
        

      </div>
      <NewsletterBox />
    </div>
  )
}

export default About