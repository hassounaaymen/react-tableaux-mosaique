import React from 'react'
import './mosaique.css'
import './aymencss.css'
import {Link} from 'react-router-dom'
import T2 from '../../../images/t2.jpg'
import T3 from '../../../images/t3.jpg'
import T4 from '../../../images/t4.jpg'
import T5 from '../../../images/t5.jpg'
import T6 from '../../../images/t6.jpg'
import T7 from '../../../images/t7.jpg'
import T8 from '../../../images/t8.jpg'
import T12 from '../../../images/t10.jpg'

export default function Mosaique() {
  return (
    <>
    <div className='DivOfMosaique'>
    <div className="divcardimg1">
 <div className="divcardimg2">
 <div className="cardflex">
 <div className="cardimg">
    <div className='dimofimg'>
        <img src={T2} alt='' className="imgpays"/>
    </div>
    <div> <button> <Link Style={"Color:white;"} to='/Connection'>See openings</Link></button> </div>
  
 </div>
 <div className="cardimg" >
 <div className='dimofimg'>
        <img src={T3} alt='' className="imgpays"/>
    </div>
    <div> <button> <Link Style={"Color:white;"} to='/Connection'>See openings</Link></button> </div>
 
 </div>
 <div className="cardimg" >
 <div className='dimofimg'>
        <img src={T4} alt='' className="imgpays"/>
    </div>
    <div> <button> <Link Style={"Color:white;"} to='/Connection'>See openings</Link></button> </div>
  
 </div>
</div>
<div className="cardflex">

 <div className="cardimg">
 <div className='dimofimg'>
        <img src={T5} alt='' className="imgpays"/>
    </div>
    <div> <button> <Link Style={"Color:white;"} to='/Connection'>See openings</Link></button> </div>
 
 </div>

<div className="cardimg">
<div className='dimofimg'>
        <img src={T6} alt='' className="imgpays"/>
    </div>
     <div> <button> <Link Style={"Color:white;"} to='/Connection'>See openings</Link></button> </div>
    
   
</div>

<div className="cardimg">
<div className='dimofimg'>
        <img src={T7} alt='' className="imgpays"/>
    </div>
    <div> <button> <Link Style={"Color:white;"} to='/Connection'>See openings</Link></button> </div>
   
</div>

</div>
<div className="cardflex">
    <div className="cardimg">

    <div className='dimofimg'>
        <img src={T8} alt='' className="imgpays"/>
    </div>
    <div> <button> <Link Style={"Color:white;"} to='/Connection'>See openings</Link></button> </div>
 
</div>

<div className="cardimg">
<div className='dimofimg'>
        <img src={T12} alt='' className="imgpays"/>
    </div>
    <div> <button><Link Style={"Color:white;"} to='/Connection'>See openings</Link> </button> </div>
  
</div>


</div>



 </div>
</div>
        
    </div>
    </>
  )
}
