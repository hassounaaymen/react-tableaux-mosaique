import React from 'react'
import './uplodingimage.css'

export default function Edit( {onSubmit,children,}) {
  return (
 
  <div className="cardOfcouverture">
  <form onSubmit={onSubmit} Style={"display: flex;align-items: center;"}>
  
      {children}
      <h1 Style="margin-bottom: -387px;"> NomClient</h1>
   
  </form>
</div>
  )
}
