// Props drilling means like different data but ui is same like instagram

// import React from 'react'
// import Card from './components/Card'

// const App = () => {
//   return (
//     <div className="parent">
//       <Card user='Aman' age={18} />
//       <Card user='Ahsan' age={20} />
//     </div>
//   )
// }

// export default App


// Props is just a keyword means parent ke through child ko data bejhte hai
// Data always go up to down not down to up
// We can say that the Props is basically Properties

// <Card /> is basically calling a function in jsx it is like how we call function
// in javascript 
// How we pass data in function with arguments this is exactly the same 
// like sum(4) just like this but in jsx 
// If i write age=18 it shows error so write age={18} is is perfect 

// If you want to pass any number ,array or variable so use {} and then pass inside
// the <Card /> calling function


import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
      <div className="parent">
        <Card user='Aman Singh' age={18} img='https://images.unsplash.com/photo-1678581231067-644dddeca6dc?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        <Card user='Ahsan Ejam' age={28} img='https://plus.unsplash.com/premium_photo-1764519370707-41d8e205a4cc?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        <Card user='Anand' age={24} img='https://images.unsplash.com/photo-1752801516481-cfb8c47ee9a3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      </div>
  )
}

export default App
