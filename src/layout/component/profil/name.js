import React from 'react'
import './uplodingimage.css'

export default function Name({onChange,
    value,}) {
  return (
    <div className="field">
    <label htmlFor="name">
      name:
    </label>
    <input 
      id="name" 
      type="text" 
      onChange={onChange} 
      maxlength="25" 
      value={value} 
      placeholder="Alexa" 
      required/>
  </div>
  )
}

    