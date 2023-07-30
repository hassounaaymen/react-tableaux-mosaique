import React from 'react'
import { FcDataEncryption } from 'react-icons/fc';
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'


export default function Menu() {
  return (

    <div>
        <Nav className="justify-content-end" activeKey="/home">
              <NavDropdown  class="bi bi-card-list" title={
       <FcDataEncryption  />
              }
               id="nav-dropdown">
                
               
                <Dropdown.Item eventKey="2.1" > <Link to='/Connection'>connecter</Link></Dropdown.Item>
                <Dropdown.Item eventKey="2.2" ><Link to='/Inscrie'> inscription </Link></Dropdown.Item>
                
               </NavDropdown> 
             </Nav>
           
                
            
        
        
 </div>
    
  )
}
