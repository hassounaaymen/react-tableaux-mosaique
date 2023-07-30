import React from 'react'
import './uplodingimage.css'

export default function Profile( {onSubmit,src,name,status,}) {
  return (
<div className="cardOfcouverture">
    <form onSubmit={onSubmit}>
    
      <label className="custom-file-upload fas">
        <div className="img-wrap" >
          <img  for="photo-upload" src={src}/>
        </div>
      </label>
    
    
    </form>
  </div>
  )
}

