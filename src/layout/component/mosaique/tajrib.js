import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import T7 from '../../../images/t7.jpg'
import T8 from '../../../images/t8.jpg'
import T12 from '../../../images/t10.jpg'
import T3 from '../../../images/t3.jpg'
import T4 from '../../../images/t4.jpg'
import T5 from '../../../images/t5.jpg'
import T6 from '../../../images/t6.jpg'

import { Link } from 'react-router-dom'

export default function Tajrib() {
  return (
      <>
    <div  ><Carousel variant="dark">
        
    <Carousel.Item interval={1000} Style={"height:80vh"}>
    <div Style={'margin: 10%;'} >
      <img
        className="d-block w-100"
        src={T12}
        alt="First slide"
        Style={"height: 50vh;"}
      /></div>
      <Carousel.Caption>
        
        <div> <button> <Link Style={"Color:white;"} to='/Connection'>See openings</Link></button> </div>
 
      </Carousel.Caption>
    </Carousel.Item>
    
    <Carousel.Item Style={"background-color:white;height:80vh"}>
        <div Style={'margin: 10%;'}>
      <img
        className="d-block w-100"
        src= {T7}
        alt="Second slide"
        Style={"height: 50vh;"}
      />
      </div>
      <Carousel.Caption>
       
        <div> <button> <Link Style={"Color:white;"} to='/Connection'>See openings</Link></button> </div>
 
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item Style={"background-color:white;height:80vh"}>
    <div Style={'margin: 10%;'}>
      <img

        className="d-block w-100"
        src= {T8}
        alt="Third slide"
        Style={"height: 50vh;"}
      /></div>
      <Carousel.Caption >
        
        <div> <button> <Link Style={"Color:white;"} to='/Connection'>See openings</Link></button> </div>
 
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item Style={"background-color:white;height:80vh"}>
    <div Style={'margin: 10%;'}>
      <img

        className="d-block w-100"
        src= {T3}
        alt="Third slide"
        Style={"height: 50vh;"}
      /></div>
      <Carousel.Caption >
        
        <div> <button> <Link Style={"Color:white;"} to='/Connection'>See openings</Link></button> </div>
 
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item Style={"background-color:white;height:80vh"}>
    <div Style={'margin: 10%;'}>
      <img

        className="d-block w-100"
        src= {T4}
        alt="Third slide"
        Style={"height: 50vh;"}
      /></div>
      <Carousel.Caption >
        
        <div> <button> <Link Style={"Color:white;"} to='/Connection'>See openings</Link></button> </div>
 
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item Style={"background-color:white;height:80vh"}>
    <div Style={'margin: 10%;'}>
      <img

        className="d-block w-100"
        src= {T5}
        alt="Third slide"
        Style={"height: 50vh;"}
      /></div>
      <Carousel.Caption >
        
        <div> <button> <Link Style={"Color:white;"} to='/Connection'>See openings</Link></button> </div>
 
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item Style={"background-color:white;height:80vh"}>
    <div Style={'margin: 10%;'}>
      <img

        className="d-block w-100"
        src= {T6}
        alt="Third slide"
        Style={"height: 50vh;"}
      /></div>
      <Carousel.Caption >
        
        <div> <button> <Link Style={"Color:white;"} to='/Connection'>See openings</Link></button> </div>
 
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  
  
  </div>
  </>
  )
}
