import React, { useState } from 'react'
import "./../../index.css"
import "./Add.css"

function Add() {

  const [title, setTitle] = useState('')
  return (
    <div>
      <h1 className='text-center heading'>✍️ Add Note</h1>

      <form>
        <input 
        type='text'
        placeholder='Enter Title'
        className='add-input' 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />
      </form>
    </div>
  )
}

export default Add