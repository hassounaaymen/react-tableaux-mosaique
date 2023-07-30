import React from 'react'
import './dachbord.css'
import Profil from '../component/profil/uplodingimage'
import Cardphoto from '../component/cardphoto/cardphoto'
import Card from '../component/card/card'
import Message from '../component/messanger/message'
import Aprpos from '../component/Aprpos/Aprpos'
import Cardnewphoto from '../component/card/cardnewphoto'
export default function Cient() {
  return (
    <div className='Body'>
      <div>
       <Profil/>
      </div>
      <div Style={"display: flex;justify-content: space-evenly;"}>
      <div className='divofclient'>
      <div >
      <Aprpos namecard={"A propos"} nomclient={"idClient147"} dtn={"date de naissence"} ville={"Rades"} />
      </div>
      <div Style={'margin-top: 7%;'} >
      <Cardphoto  />
      </div>
      </div>
      <div Syle={"border: groove;margin-top: 7%;width: 31rem; background-color: #f3f2f2; "}>

        <div>
          <Cardnewphoto/>
        </div>
        <div>
          <Cardnewphoto/>
        </div>
        <div>
          <Cardnewphoto/>
        </div>
        <div>
          <Cardnewphoto/>
        </div>
      </div>
      </div>
     <Message/> 
    </div>
  )
}
