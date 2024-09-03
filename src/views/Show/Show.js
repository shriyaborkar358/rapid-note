import React from 'react'
import "./../../index.css"
import "./Show.css"
import HomeButton from '../../components/HomeButton/HomeButton'
import { Link } from 'react-router-dom'

function Show() {
  return (
    <div>
       <h1 className='text-center heading'>📖 Show Note</h1>
       
       <Link to="/" >
       <HomeButton/>
       </Link>
    </div>
  )
}

export default Show