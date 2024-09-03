import React from 'react'
import "./HomeButton.css"
import HomeImage from "./../../assets/home-button.png"

function HomeButton() {
  return (
    <div>
        <img src={HomeImage} className='home-img'/>
    </div>
  )
}

export default HomeButton