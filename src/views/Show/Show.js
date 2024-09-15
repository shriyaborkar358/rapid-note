import React, { useEffect, useState } from 'react'
import "./../../index.css"
import "./Show.css"
import HomeButton from '../../components/HomeButton/HomeButton'
import { Link } from 'react-router-dom'
import NoteCard from '../../components/NoteCard/NoteCard'

function Show() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    setNotes(savedNotes);
  }, []);


  return (
    <div>
      <h1 className='text-center heading'>📖 Show Note</h1>

      <div className='notes-container'>
        {
          notes.map((notes, index) => {

            const { title, description, category, emoji } = notes
            return <NoteCard
              index={index}
              title={title}
              description={description}
              category={category}
              emoji={emoji}
              key={index}
            />
          })
        }
      </div>

      <Link to="/" >
        <HomeButton />
      </Link>
    </div>
  )
}

export default Show