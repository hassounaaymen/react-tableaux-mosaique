import React from 'react'

import './dachbord.css'
import Profil from '../component/profil/uplodingimage'
import Cardphoto from '../component/cardphoto/cardphoto'
import Card from '../component/card/card'
import Message from '../component/messanger/message'
import Aprpos from '../component/Aprpos/Aprpos'
import Cardnewphoto from '../component/card/cardnewphoto'

export default function Produit() {
  return (
    <div className='Body'>
      <div>
       <Profil/>
      </div>
<div>
  
<div Style={"display:grid;margin-top:4%;"} >
<div>
  <input className="input-rech"  placeholder="search by name:" onChange={""}/>
  </div>
  <div Style={"display:flex"}>
    <div> <Cardnewphoto/></div>
    <div><Cardnewphoto/></div>
    <div><Cardnewphoto/></div>

  </div>
  <div Style={"display:flex"}>
    <div><Cardnewphoto/></div>
    <div><Cardnewphoto/></div>
    <div><Cardnewphoto/></div>

  </div>
  <div Style={"display:flex"}>
    <div><Cardnewphoto/></div>
    <div><Cardnewphoto/></div>
    <div><Cardnewphoto/></div>

  </div>
</div>

</div>
     
     <Message/> 
    </div>
  )
}
