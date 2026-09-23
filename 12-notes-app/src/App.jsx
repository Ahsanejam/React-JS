import React, {useState} from 'react'
import { X } from 'lucide-react';


const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(title, details);
    // console.log(title);
    // console.log(details);

    const copyTask = [...task];
    // console.log(copyTask);
    

    copyTask.push({title, details})

    setTask(copyTask)

    // console.log(task);
    

    
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    // console.log('note deleted');
    const copyTask = [...task];
    console.log(copyTask[idx]);
    // console.log(idx)

    copyTask.splice(idx, 1)

    setTask(copyTask)

  }


  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex p-10 lg:w-1/2 gap-4  items-start flex-col'>

        <h1 className='text-3xl font-bold'>Add Notes</h1>
        {/* First Input for Heading */}
          <input 
            type="text" 
            placeholder='Enter Notes Heading'
            className=' px-5 py-2 w-full font-medium border-2 outline-none rounded'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />

        {/* Detailed Input */}
          <textarea 
            type="text" 
            className=' px-5 h-32 py-2 font-medium flex items-start flex-row w-full border-2 outline-none rounded'
            placeholder='Write Details here'
            value={details}
            onChange={(e) => {
              setDetails(e.target.value)
            }}
          />

          <button className='bg-white active:scale-95 text-black px-5 font-medium py-2 w-full outline-none rounded'
          >
            Add Note
          </button>

        {/* <img className='rotate-y-180 h-52' src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png" alt="" /> */}
      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10'>

        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          {/* <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div> */}
          {task.map(function(elem, idx) {
            return <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZiRIBKbZmja-YbH5swhNMf-WcFTpOS4zSQ&s")]'>
              {/* <h2 className=' absolute top-5 right-5 bg-red-500 p-1 rounded-full text-xs'> 
                <X color="#ffffff" strokeWidth={2.75} />
              </h2> */}
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full bg-red-500 active:scale-95 cursor-pointer py-1 text-xs rounded font-bold text-white'>
                Delete
              </button>
            </div>
          })}
        </div>

      </div>
    </div>
  )
}

export default App
