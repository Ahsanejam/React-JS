import React, { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  // This is not ideal way in react to call a function 
  // function random() {
  //   const a = Math.random()
  //   console.log(a)
  //   console.log('hello');
  // }

  // random()

  // What  useEffect do  it is basical do side by side process in react for example
  // Let's say a huge truck in road who take all space in the road the truck is react rendering process 
  // it show all the ui and what i want is to do something side by side process not in ui but like
  // api calling etc so we use useeffect it is like you take bicycle in sidewalk the truck is gone first
  // react rendering process go first then the side bicycle go in upper side function random() example
  // what they do is we add another function in truck but we want this function to run side by side 
  // not give load to react rendering process so i use useEffect 

  // useEffect run when the react rendering process is completed 

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)

  // This is component did but once because we pass dependency array 
  // In this example or function [num] became its dependency when the num state change 
  // the useEffect function call otherwise it call only one time 
  
  // We use useEffect run the things on microtask queue or side queue
  useEffect(function() {
    console.log('use effect is running... ')
  }, [num])

  return (
    <div>
      <h1>num {num}</h1>
      <h1>num2 {num2}</h1>
      <button 
      onMouseEnter={()=> {
        setNum(num + 1)
      }}
      onMouseLeave={() => {
        setNum2(num2 + 10)
      }}
      >
        Hover 
      </button>
    </div>
  )
}

export default App



// 2nd example

// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [a, setA] = useState(0)
//   const [b, setB] = useState(0)

//   function aChanging() {
//     console.log('A ki value change ho gyi');
//   }

//   function bChanging() {
//     console.log('B ki value change ho gyi');
//   }

//   useEffect(function() {
//     aChanging() 
//   }, [a])

//   useEffect(function() {
//     bChanging()
//     // console.log('use effect is running...')
//   }, [b])

//   return (
//     <div>
//       <h1>A is {a}</h1>
//       <h1>B is {b}</h1>
//       <button 
//       onClick={() => {
//         setA(a+1)
//       }}
//       >Change A</button>
//       <button 
//       onClick={() => {
//         setB(b-1)
//       }}
//       >Change B</button>
//     </div>
//   )
// }

// export default App
