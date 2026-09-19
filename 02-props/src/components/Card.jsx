// import React from 'react'

// const Card = () => {
//   return (
    // <div className="card">
    //     <img src="https://images.unsplash.com/photo-1678581231067-644dddeca6dc?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    //     <h1>Ahsan Ejam</h1>
    //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    //     <button>View Profile</button>
    //   </div>
//   )
// }

// export default Card




// import React from 'react'

// // This parameter props are an object
// function Card(props) {
//     console.log(props)
//     return <div className="card">
//                 <img src="https://images.unsplash.com/photo-1678581231067-644dddeca6dc?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//                 <h1>Ahsan Ejam</h1>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
//                 <button>View Profile</button>
//           </div>
// }

// export default Card



// import React from 'react'

// const Card = (props) => {
//     console.log(props);
    
    
//   return (
//     <div className="card">
//         <img src="https://images.unsplash.com/photo-1678581231067-644dddeca6dc?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//         <h1>{props.user}</h1>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
//         <button>View Profile</button>
//     </div>
//   )
// }

// export default Card

// We ca gave whatever name to arguments props 



import React from 'react'

const Card = (props) => {
    
  return (
    <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card
