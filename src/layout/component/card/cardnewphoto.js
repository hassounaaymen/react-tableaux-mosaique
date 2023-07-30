import React,{useState} from 'react'

import Card from 'react-bootstrap/esm/Card'
import Button from 'react-bootstrap/esm/Button'
import NewImg from '../../../images/t1.jpg'
import "./cardNewimg.css"
import InputGroup from 'react-bootstrap/esm/InputGroup'

export default function Cardnewphoto() {
  
    const [commentaire,setCommentaire]=useState('');
    const [comentaireadd,setComentaireadd]=useState([]);

    const addCommentaire=(commentaire) =>
    {
    
  
      
       return setComentaireadd( ["Nom Client :",commentaire.commentaire])
      
    }

    
    
    const addCommentairenew=(comentaireadd) =>
    {
    
  
      
       return (
        <div Style={"display:flex"}>
        <p Style={"color: #1e1b1b;font-style: oblique;"}> {comentaireadd[0]}</p><p Style={"color:#151718"}>{ comentaireadd[1]  }</p>
    </div>
       )

       

        
       
      
    }

    

  return (
      <>   
       <div >
     
        <Card Style={"border: groove;margin-top: 7%;width: 30rem; height:auto; background-color: #f3f2f2; "}>
  <div Style={"margin:10%;width: 20rem;"}>
  <Card.Img variant="top" src={NewImg} className="imageCardnew" />
  </div>
  <Card.Body>
  <div Style={"display:flex;justify-content: space-evenly;"}> 
  <label  className="u-label" Style={"color: #3c4c7a;"}>Nom Tableau</label>
  <label  className="u-label">5000DT</label>
  </div>
  <div>
      {
          addCommentairenew(comentaireadd)
      }
  </div>
 <div Style={"display:grid"}>
    <input  onChange={event=>setCommentaire(event.target.value)} />
      
    <Button variant="primary" onClick={()=>{addCommentaire({ commentaire

    })}}>commenter</Button>
    </div>
  </Card.Body>
</Card>
    </div>
    </>

  )
}
