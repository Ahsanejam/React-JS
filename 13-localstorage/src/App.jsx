import React from 'react'


const App = () => {

  // This is the method to clear your local storage
  // localStorage.clear()

  // This method is use to clear season storage 
  // sessionStorage.clear()

  // This method is use to basically save the date to local storage in the form of key value pairs permanantly 
  // until you remove it 

  // localStorage.setItem('user', 'Ahsan')
  // localStorage.setItem('age', '18')
  

  // This methos is use to acces the data from localstorage
  // const user = localStorage.getItem('user')
  // console.log(user)

  // const age = localStorage.getItem('age')
  // console.log(age, user)


  // This method is use to basically remove the date from local storage in browser because if you use
  // setItem methos it will save data permanently in browser until you use removeItem method to remove it 
  // localStorage.removeItem('age')


  // const user = {
  //   username: 'Ahsan',
  //   age: 18,
  //   city: 'Mumbai',
  // }
  
  // The JSON.stringify() function in JavaScript converts a JavaScript object or value into a text 
  // string in JSON format

  // console.log(user);
  // localStorage.setItem('user', JSON.stringify(user))
  


  // const user = JSON.parse(localStorage.getItem('user'))
  // // console.log(typeof(user));
  // console.log(user)

  
  return (
    <div>
      App
    </div>
  )
}

export default App


