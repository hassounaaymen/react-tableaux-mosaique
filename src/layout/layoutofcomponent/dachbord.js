import React from 'react'
import Menu from '../component/menu'
import Logoo from '../component/logo'
import Definition from '../component/definition/definition'
import Mosaique from '../component/mosaique/mosaique'
import Tojrab from '../component/mosaique/tajrib'
import Contacter from '../component/contacter/contacter'
import './dachbord.css'

export default function Dachbord() {
  return (
  
  <>
  <div className='Body'>
    <div className='NavBar'>
    
       <div className='divOflogo'>

         <Logoo/>
       </div>
       <div className="Menu" >
         <Menu/>
       </div>
    </div>
      <div className='Block'>
        <Definition/>
      </div>
      <div className='Block'>
        <Mosaique/>
      </div>
      <div className='Block'>
        <Contacter/>
      </div>
      
    </div>
    </>
  )
}
