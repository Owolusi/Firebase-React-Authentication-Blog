import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import Blogs from '../../components/ListBlog/ListBlog'



const Home = () => {
  return (
    
    <div className='home-container'> 
    <Blogs /> 
    <div className="custom-background">
      <h1 className='display-6 fs-4 mt-80'>
        Go to dashboard
      </h1>
      <Link to='/dashboard'>
        <p>click below</p>
      <button type="button" className='btn btn-primary btn-sm'>Dashboard</button>
      </Link>
      </div>
      <div className='blog_container'>
      </div>
    </div>
  )
}

export default Home