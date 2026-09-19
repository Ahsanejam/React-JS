// import React, {useState} from 'react'

// const App = () => {

//   const [num, setNum] = useState(10)
// // in this btnClicked function first num print 10 and then change the value even if you try to 
// // print console.log(num) after the setNum the value is 10 because it works asynchronously setNum 

//   const btnClicked = () => {
//     console.log(num);
    
//     setNum(num + 5)
//     console.log(num);

//     // setNum(num)  // React can't rerender this value becasue it's the same value why it render because it's the same 
    
//     // React identify it's the same value so can't change or rerender it 
//     // If you write setNum(num + 1) then it rerender it because values is changed 

//     // setNum(num + 1)
    
//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnClicked}>click</button>
//     </div>
//   )
// }

// export default App



// import React, {useState} from 'react'

// const App = () => {

//   const [num, setNum] = useState({user: 'Ahsan', age: 19})
//   const btnClicked = () => {
//     // console.log(num.user);
//     // console.log(num.age);

//     // let {user: newUser, age: newAge} = num
//     // console.log(newUser, newAge)

//     const newNum = {...num};
    
//     newNum.user = 'Aman'
//     newNum.age = 29
//     console.log(newNum);
    
    
//     setNum(newNum)
    
    
    
//   }

//   return (
//     <div>
//       <h1>{num.user}, {num.age}</h1>
//       <button onClick={btnClicked}>click</button>
//     </div>
//   )
// }

// export default App



// import React, {useState} from 'react'

// const App = () => {
//   const [num, setNum] = useState([10, 20, 30])

//   const btnClicked = () => {
//     const newNum = [...num]
//     newNum.push(99)

//     // console.log(newNum);
//     setNum(newNum)

//   }

//   return (
//     <div>
//       {/* <h1>{num.map((el) => {
//         return el+" "
//       })}</h1> */}

//       <h1>{num}</h1>
//       <button onClick={btnClicked}>click</button>
//     </div>
//   )
// }

// export default App






// import React, {useState} from 'react'

// const App = () => {
//   const [num, setNum] = useState({user: 'Ahsan', age: '17'})

//   const btnClicked = () => {
//     setNum(prev=>({...prev,age: 50}))
//   }

//   return (
//     <div>
//       <h1>{num.user}, {num.age}</h1>
//       <button onClick={btnClicked}>click</button>
//     </div>
//   )
// }

// export default App


// Batch update
import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(10)
  const btnClicked = () => {
    // setNum(num+1)
    // setNum(num+1)
    // setNum(num+1)
    // I write setNum three time and i thought the value change +3 every time because i write three time
    // setNum but it cant change the value three time it only increment one time if i want to do that 
    // If i want that the value change three time then we use this 

    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
    
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App

