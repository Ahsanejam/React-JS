import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
      {/* <div className='p-4'>
        <h3 className=' mb-7 text-5xl font-bold'>Prospective <br />
        <span>cutomer</span> <br />segmentation</h3>
        <p className='font-medium text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi neque ducimus, et assumenda veritatis aut molestias quisquam odit tempore a.</p>
      </div> */}
      {/* <div className='text-7xl'>
        <i className="ri-arrow-right-up-line"></i>
      </div> */}

      <HeroText />
      <Arrow />

    </div>
  )
}

export default LeftContent

