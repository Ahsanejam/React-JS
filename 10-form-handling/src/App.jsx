// import React from 'react'

// const App = () => {
  

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(e);
//     console.log('Form Submitted');
//     console.log(e.target["0"].value)
//   }

//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <input type="text" placeholder='Enter your name' />
//         <button>Sumbit</button>
//       </form>
//     </div>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {

//   // Form has a default behaviour The behavious is when you or anyone submitted the input the page is reload
//   // This is the form behaviour but we don't want that so what we do is to use e.preventDefault() method
//   // This method is use for if you don't want to reload the page for input submitted then we use 
//   // preventDefault() method
//   // If we do not want the form to use it's default behavious after input sumitted then use this method

//   const submitHandler = (e) => {
//     e.preventDefault()
//     console.log('Form Submitted');
//   }
//   return (
//     <div>
//       <form onSubmit={(e) => {
//         submitHandler(e)
//       }}>
//         <input type="text" placeholder='Enter your name' />
//         <button>Sumbit</button>
//       </form>
//     </div>
//   )
// }

// export default App





