import React from 'react'
import Logo from '../../images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './logo.css'

export default function Logoo() {
  return (
    <>
       <div className='DivOfLogo'>
           <div>
              <img src={Logo} className="logo" alt="logo" />
           </div>
           <div>
               <h3>osaïque</h3>
           </div>
       </div>
    
    
    </>
  )
}
