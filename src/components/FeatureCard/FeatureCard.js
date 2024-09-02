import React from 'react'
import "./FeatureCard.css"

function FeatureCard({featureImg, featureText}) {
  return (
    <div className='feature-container'>
        <img src={featureImg} className='feature-img' alt='FeatureImg'/>
        <p className='feature-text'>{featureText}</p>
    </div>
  )
}

export default FeatureCard