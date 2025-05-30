import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className='text-orange-400'>{text1} <span className='text-blue-900 font-medium'>{text2}</span></p>
        <p className='w-6 sm:w-12 h-[1px] sm:h-[2px] bg-blue-900'></p>
    </div>
  )
}

export default Title