import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/*
      <header>
        <nav>
          <ul>
            <li>
              <a>
                Home
              </a>
            </li>
            <li>
              <a>
                Help
              </a>
            </li>
          </ul>
        </nav>
  </header>*/}
      <h1>
        Go to dashboard
      </h1>
      <Link to='/dashboard'>
      <button>Dashboard</button>
      </Link>
    </div>
  )
}

export default Home