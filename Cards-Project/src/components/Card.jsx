import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  // console.log(props);
  
  return (
    <div className="card">
        <div>
        <div className="top">
          {/* <img src="https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg" alt="" /> */}
          <img src={props.logo} alt="" />

          <button>Save <Bookmark size={12} /> </button>
        </div>

        <div className="center">
          <h3>{props.name} <span>{props.date}</span></h3>
          <h2>{props.post}</h2>
          <div className='tag'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        </div>

        <div className="bottom">
          <div>
            <h3>${props.pay}/hr</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
    </div>
  )
}

export default Card
