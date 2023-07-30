import React from 'react'
import { Link } from 'react-router-dom'

import './connection.css'

export default function Inscrie() {
  return (
    <>
    <div className='container2'>
      
   
  <div  className='form2'>
    <h1>Sign Up</h1>
    <p Style={"Color:black;"}>Please fill in this form to create an account.</p>
    <hr/>

    <label for="email"><b>Email</b></label>
    <input className='input' type="text" placeholder="Enter Email" name="email" required/>

    <label for="psw"><b>Password</b></label>
    <input className='input' type="password" placeholder="Enter Password" name="psw" required/>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input className='input' type="password" placeholder="Repeat Password" name="psw-repeat" required/>
    
    <label>
      <input type="checkbox"  name="remember" Style="margin-bottom:15px" required=""/> Remember me
    </label>
    
    <p Style={"Color:black;"}>By creating an account you agree to our <a href="#" Style="color:dodgerblue">Terms & Privacy</a>.</p>

    
      
    <button className='button1' type="submit" ><Link to='/Client'>Sign Up</Link></button>
    
  </div>

        
    </div>
    </>
  )
}
