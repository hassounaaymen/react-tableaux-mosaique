import React from 'react'
import { Link } from 'react-router-dom'
import './connection.css'
export default function Connection() {
  return (
    <>
    <div className='container'>
      
     <div className='form'>
                <h1>Connexion</h1>
                
                <label ><b>Nom d'utilisateur</b></label>
                <input  className='input'type="text" placeholder="Entrer le nom d'utilisateur" name="username" required/>

                <label className='input'><b>Mot de passe</b></label>
                <input className='input' type="password" placeholder="Entrer le mot de passe" name="password" required/>

                <div className='displayflex'>
                <button className='button2' type="submit" ><Link to='/Inscrie'  > Sign Up</Link></button>
                   <button className='button1' type="submit" ><Link to='/Client'>Sign In</Link></button>
                </div>
            
      </div>  
      <div>
     
      
         </div>
        
    </div>
    </>
  )
}
