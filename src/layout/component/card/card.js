import React from 'react'
import { Link } from 'react-router-dom'
import  Card  from 'react-bootstrap/Card'


export default function card() {
  return (
    <>
    <div Style={"border: groove;margin-top: 7%;width: 30rem;height: 27rem; background-color: #f3f2f2; "}>
    <div >
  <div>
    

    <div Style={' height: 30vh;display: grid;align-content: space-evenly;'}>
    <div className="formOfInput">
                        <label  className="u-label">Message</label>
                        <textarea placeholder="" rows="2" cols="40" id="message-daf4" name="message" className="" required=""></textarea>
                      </div>
    </div>
  
    <div> <button><Link Style={"Color:white;"} to='/Connection'>Envoyer</Link> </button> </div>
  </div>
</div>
</div>
    </>
  )
}
