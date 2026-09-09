import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users);
  
  return (
    <div id='right' className='h-full flex rounded-2xl overflow-x-auto flex-nowrap gap-8 p-4 w-2/3'>
      {/* <RightCard />
      <RightCard />
      <RightCard /> */}
      {props.users.map((el, idx) => {
        return <RightCard img={el.img} tag={el.tag} key={idx} id={idx} color={el.color}/>
      })}

    </div>
  )
}

export default RightContent
