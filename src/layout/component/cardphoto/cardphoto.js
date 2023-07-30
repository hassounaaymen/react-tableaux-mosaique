import React from 'react'
import './cardphoto.css'
import {Link} from 'react-router-dom'

import ref from '../../../images/t4.jpg'

export default function Cardphoto() {
  return (
    <>
    <div Style={"border: groove;margin-top: 7%;width: 21rem;height: 27rem; background-color: #f3f2f2; "}>
    <div >
  <div>
    <h1>Mes Tableau</h1>

    <div Style={' height: 30vh;display: grid;align-content: space-evenly;'}>
    <div Style={'display:flex;align-items: center;'}>
      <div> <img src={ref} alt='' className='imgcardphoto' /></div>
      <div> <img src={ref} alt='' className='imgcardphoto' /></div>
      <div> <img src={ref} alt='' className='imgcardphoto' /></div>
      </div>
      <div Style={'display:flex;align-items: center;'}>
      <div> <img src={ref} alt=''className='imgcardphoto'  /></div>
      <div> <img src={ref} alt='' className='imgcardphoto' /></div>
      <div> <img src={ref} alt='' className='imgcardphoto'  /></div>
      </div>
      <div Style={'display:flex;align-items: center;'}>
      <div> <img src={ref} alt=''className='imgcardphoto'  /></div>
      <div> <img src={ref} alt='' className='imgcardphoto' /></div>
      <div> <img src={ref} alt='' className='imgcardphoto'  /></div>
      </div>
    </div>
  
    <div> <button><Link Style={"Color:white;"} to='/Produit'>See openings</Link> </button> </div>
  </div>
</div>
</div>
    </>
  )
}
