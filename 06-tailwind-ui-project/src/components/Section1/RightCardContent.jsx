import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between'> 
        <h2 className='bg-white text-sm font-semibold rounded-full h-8 w-8 flex justify-center items-center'>{props.id+1}</h2>
        <div>
            <p className='text-shadow-2xs text-lg leading-relaxed text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, omnis.</p>
            <div className='flex justify-between'>
                <button style={{backgroundColor: props.color}} className='text-white font-medium px-6 py-2 rounded-full'>{props.tag}</button>
                <button className='text-white font-medium px-3 py-2 rounded-full '><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent
