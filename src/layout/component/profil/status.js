import React from 'react'
import './uplodingimage.css'

export default function Status({onChange,
    value,}) {
  return (
    <div className="field">
    <label htmlFor="status">
      status:
    </label>
    <input 
      id="status" 
      type="text" 
      onChange={onChange} 
      maxLength="35" 
      value={value} 
      placeholder="It's a nice day!" 
      required/>
  </div>
  )
}

   