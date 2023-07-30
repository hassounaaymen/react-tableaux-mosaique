import React from 'react'
import './definition.css'
import Img from '../../../images/t1.jpg'

export default function Definition() {
  return (
      <>
      <div className='DivOfDefinition'>
        
          <div className='Definition'>
            <p>
            Assemblage fait de petits cubes ou de fragments multicolores de divers
             matériaux (pierre, marbre, émail, verre, métal, bois, etc.) formant un motif décoratif qui pare
            le revêtement d'un sol, d'un mur, d'un plafond ou la surface d'un objet.
            </p>
          </div>

          
            <div className="DivofImg">
              <img  class="BlockSize" src={Img}   alt=''/>
             

                 </div>

              
          
        
          
      </div>
      </>
    
  )
}
