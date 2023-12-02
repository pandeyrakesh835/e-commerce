import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <>
    <div className='col-3'>
    <div className="blog-card">
    <div className='blog-image'>
    <img src="images/blog-1.jpg" className='img-fluid' alt='blog'/>
    
    <div className='blog-content'>
    <p className='date'>02 dec, 2023</p>
    <h5 className='title'>A beautiful sunday morning renaissance</h5>
    <p className='desc'>marketing is  strategic marketing approach focused on creating and distributing valuable  </p>
    <Link to="/" className="button">Read More</Link>
    </div>
    </div>
    </div>
    
    
    </div>

    
    </>
  )
}

export default BlogCard