import React from 'react'
import Title from '../components/Title'
import { assets } from './../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={"US"} />

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="about us image" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-blue-800'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corrupti saepe et odit sit magni aperiam labore temporibus dicta pariatur iste esse fuga voluptatem alias eum molestiae voluptatum, provident sequi!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente omnis nemo provident, molestiae dolorum magni accusamus aliquid rem illo et sunt illum beatae? Repudiandae id molestias accusamus laborum, porro enim?</p>
          </div>
      </div>
    </div>
  )
}

export default About