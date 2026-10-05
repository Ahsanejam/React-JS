import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    // basically useParams is use to give the parameter of Route like in this example i pass courseId 
    // In courses route like /courses/courseId
    const params = useParams()
    console.log(params.courseId);
  return (
    <div>
      <h1>{params.courseId} Course Detail </h1>
    </div>
  )
}

export default CourseDetail
