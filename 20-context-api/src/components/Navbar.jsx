// import React from 'react'
// import Nav2 from './Nav2'

// const Navbar = ({children, theme}) => {
//   console.log(children);
  
//   return (
//     <div className='nav'>
//       <h2>Sheryians</h2>
//       {/* {props.children[0]}
//       {props.children[1]} */}
//       <Nav2 theme={theme} />
//     </div>
//   )
// }

// export default Navbar



import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext'




const Navbar = () => {
  // console.log(props.children);
  // const data = useContext(PostDataContext)
  // console.log(data);
  // const data = useContext(PostDataContext)
  // console.log(data)
  

  const [theme] = useContext(ThemeDataContext)
  
  
  
  return (
    <div className={theme}>
      <h2>Ahsan</h2>
      {/* {props.children[0]}
      {props.children[1]} */}
      <Nav2/>
    </div>
  )
}

export default Navbar
