// import React from 'react'
// import Navbar from './components/Navbar'
// import { useState } from 'react'

// const App = () => {

//   const [theme, setTheme] = useState('light')
//   return (
//     <div>
//       <Navbar theme={theme}>
//         <h2>This is Navbar</h2>
//         <h3>Bohot accha navbar</h3>
//       </Navbar>
//     </div>
//   )
// }

// export default App


import React from 'react'
import Navbar from './components/Navbar'
import Button from './components/Button'


const App = () => {
  return (
    <div>
      <Navbar />
      <Button />
    </div>
  )
}

export default App
