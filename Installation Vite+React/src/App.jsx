// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// function App() {

//   return <h1>Like Kardo!!!</h1>
// }

// export default App 

// rafce -> react arrow function export component
// import React from 'react'

// const App = () => {
//   return (
//     // They cannot pass in the same time because it is a function function only return one thing 
//     // So We use fragments
    // <div id='dad'>
    //   <h1 id='child1'>Hello</h1>
    //   <h2 id='child2'>Hello</h2>
    // </div>

//   )
// }

// export default App



// Fragments  -> it basical is empty tags it usually use to contain things 
import React from 'react'

const App = () => {
  return (
    // This will works we insert dad and chacha inside a div but we don't want extra div so what 
    // we gonna do about it 

    // <div>
    //   <div id='dad'>
    //     <h1 id='child1'>Hello</h1>
    //     <h2 id='child2'>Hello</h2>
    //   </div>
    //   <div id="chacha">
    //   </div>

    // </div>


    // fragments
    <>
      <div id='dad'>
        <h1 id='child1'>Hello</h1>
        <h2 id='child2'>Hello</h2>
      </div>
      <div id="chacha">
        
      </div>
    </>
  )
}

export default App
