import React from 'react'
import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted by', title);

    setTitle('')
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input 
        type="text" 
        placeholder='Enter your name' 
        value={title}

        onChange={(e)=> {
          setTitle(e.target.value)
          // console.log(title)
        }}
        />
        <button>Sumbit</button>
      </form>
    </div>
  )
}

export default App



// How this works so we know that we cannot directly interact with browser dom if we use react because 
// It's not the best way and you can't see live changes So

// What we do fist because in this case we use input so first we make useState title and setTitle
// initial value is '' empty and then in input section we pass some props like type placeholder and
// value the value is basicall what's the current value of input in this case value={title} and title
// is empty so what we do is first we use onChange function to if any change in input we see live in 
// input section so first we access all the input value like e.targest.value and then 
// if i write anything inside input section first onChange function call and then setTitle(e.target.value)
// means set the value of title and then the value goes to title and the value change in input section

// onChange --> setTitle --> title --> value


//  This is basically Two Way Binding

// What is two way Binding 
// The two way binding is you can't do directly instead tell react to do things especially if you manage
// inputs



