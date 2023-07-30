import React from 'react'
import {Navbar} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import './navbar.css'
import { Link } from 'react-router-dom'

export default function NavbarClient() {
  return (
    <>
    <div className='nav'>
    <Navbar   bg="light" variant="light">
    <Nav className="me-auto">
      <Nav.Link href='/'>Home</Nav.Link>
      <Nav.Link href='/'>hestorique</Nav.Link>
      <Nav.Link href='/Client'>Profil</Nav.Link>
      <Nav.Link href='/Produit'>Produit</Nav.Link>
    </Nav>

    
  </Navbar>
  </div>
  
</>
  )
}
