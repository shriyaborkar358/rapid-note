import React from 'react'
import "./../../index.css"
import "./Home.css"
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import FeatureHeart from './heart.png'
import FeatureSecure from './secure.png'
import FeatureBrain from './brain.png'
import FeatureNote from './note.png'
import { Link } from 'react-router-dom'

function Home() {

  const FEATURES = [
    {
      featureImg: FeatureSecure,
      featureText: "Securely save your notes within your browser's local storage for quick access."
    },
    {
      featureImg: FeatureBrain,
      featureText: "Let your brain work on thoughts leave the remembering to Rapid note will manage your memory.."
    },
    {
      featureImg: FeatureHeart,
      featureText: " Easily create notes with a user-friendly design that makes adding content  straightforward."
    },
    {
      featureImg: FeatureNote,
      featureText: " Organize your notes by categories or tags for easy retrieval and management."
    },
  ]

  return (
    <div>
      <h1 className='text-center heading'>📘 Rapid Note 📘</h1>
      <p className='highlight text-center'>Small tasks or big goals, write them down and get them done. From big goals to small tasks, note it all!{" "}
      </p>

      <div>
        <h3 className='text-center'>Why Quick Note stands out as your note-taking solution ?</h3>

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
        <Link to="/add" className='add-show-btn btn-color-1 white-color'>  Add Note ✍️</Link>
        <Link to="/show" className='add-show-btn btn-color-2'> View Note 📘</Link>
      </div>

    </div>
  )
}

export default Home