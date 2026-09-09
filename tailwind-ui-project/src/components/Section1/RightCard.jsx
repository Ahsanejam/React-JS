import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-65 rounded-3xl '>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
      {/* <div className='absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between'> 
        <h2 className='bg-white text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>1</h2>
        <div>
            <p className='text-lg leading-normal text-white mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, omnis.</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white font-medium px-6 py-2 rounded-full '>Satisfied</button>
                <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full '><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div> */}

      <RightCardContent color={props.color} tag={props.tag} id={props.id}/>
    </div>
  )
}

export default RightCard
