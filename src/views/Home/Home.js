import React from 'react'
import "./../../index.css"
import "./Home.css"
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import FeatureHeart from './heart.png'
import FeatureSecure from './secure.png'
import FeatureBrain from './brain.png'
import { Link } from 'react-router-dom'

function Home() {

  const FEATURES = [
    {
      featureImg: FeatureSecure,
      featureText: "Notes will be saved secuely in your Browser's local storage."
    },
    {
      featureImg: FeatureBrain,
      featureText: "Use your brain for Thinking . Not For remaimbering things."
    },
    {
      featureImg: FeatureHeart,
      featureText: "Loved by 100+ users. Feedbacks are always welcome!"
    },
  ]

  return (
    <div>
      <h1 className='text-center heading'>📘 Rapid Note </h1>
      <p className='text-center primary-color heading-font'>Your pocket friendly note taking App.{" "}
        <del>Never forget anything again!</del>{" "}
        <span className='highlight'> Remaimber Everything! 🧠</span>
      </p>

      <div>
        <h2 className='text-center'>Why you should use quick note ?</h2>

        <div className='features-container'>

          {
            FEATURES.map((feature, i) => {

              const { featureImg, featureText } = feature
              return (
                <FeatureCard
                  featureImg={featureImg}
                  featureText={featureText} 
                  key={i}
                  />
              )
            })
          }


        </div>
      </div>

      <div className='button-container'>
        <Link to="/add"  className='add-show-btn btn-color-1 white-color'> ✍️ Add Note </Link>
        <Link to="/show" className='add-show-btn btn-color-2'> 📘 view Note </Link>
      </div>

    </div>
  )
}

export default Home