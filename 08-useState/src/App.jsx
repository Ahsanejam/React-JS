// import React from 'react'

// const App = () => {
//   let a = 20;

//   function changeA() {
//     console.log(a);
    
//     a++;
//     console.log(a);
    
//   }

//   return (
//     <div>
//       <h1>Value of a is {20}</h1>
//       <button onClick= {changeA}>Click</button>
//     </div>
//   )
// }

// export default App




// import React, { useState } from 'react'

// // we can't make variable like let or var a = 10 in React instead we use useState to write a variable and 
// // change the value on it 


// const App = () => {
//   // num is read only value we only read then in this time num value is 10 num value is useState(value)
//   // num is connected with useState(value) it means whatever value of useState is num value 

//   // setNum is basically use for change the value of num or value we can't directly change num value
//   // we ask react to change the value of num
//   // how it works lets take example 
//   // first we say hey react change value num then react go to website change the value of num 
//   // And then from website num changed value come to react and then react say here is you new num value 
  
//   // Because react is like the middle man he do everything for us we can't directly change any value 
//   // we tell react to change it

//   // one more thing if we directly change the value without react then we can't see the changes in screen
//   // we only see the changes in browser console but if we change the value using useState then we can 
//   // easily see the changes in live browser 

//   const [num, setNum] = useState(10)
//   const [username, setUsername] = useState('Ahsan')
//   // const [users, setUsers] = useState([10, 20, 30])
//   // function changeNum() {
//   //   console.log('hello');
    
//   // }
//   const changeNum = () => {
//     // console.log('hello');
//     setNum(20)
//     setUsername('Aman')
//     // setUsers([30, 40, 50])

//   }

//   return (
//     <div>
//       {/* <h1>Value of num is {num} <br /> {users} <br /> value of user is {username}</h1> */}
//       <h1>Value of num is {num} <br /> value of user is {username}</h1>
//       <button onClick={changeNum}>Click</button>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'

// const App = () => {

//   const [states, setStates] = useState(10)
//   function increment() {
//     setStates(states + 1)
//   }

//   return (
//     <div>
//       <h1>Value of states is {states}</h1>
//       <button onClick={increment}>Click me</button>
//     </div>
//   )
// }

// export default App




import React, {useState} from 'react'

const App = () => {
  const [num, setNum] = useState(0);
  function increaseNum() {
    console.log('increasing');
    setNum(num+1)
  }
  function decreaseNum() {
    console.log('decreasing');
    setNum(num-1)
  }

  function jump5Num() {
    console.log('jump by 5')
    setNum(num+5)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={jump5Num}>Increase by 5</button>
    </div>
  )
}

export default App
