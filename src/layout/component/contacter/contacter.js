import React from 'react'

import './contacter.css'
export default function Contacter() {
  return (
    <>
    <div className='DivOfContacter'>

                  <div>
                      <div>
                          <h3> Contacter Nous</h3>
                      </div>
                      <div Style={"display: flex; margin: 4%;"}>
                    <div className='DivOfContactBlock1'>
                      <div className="formOfInput">

                        <label className="">Name</label>
                        <input type="text" placeholder="Enter your Name"  name="name" className="" required=""/>
                      </div>
                      <div className="formOfInput">
                        <label for="email-daf4" className="u-label">Email</label>
                        <input type="email" placeholder="Enter a valid email address" id="email-daf4" name="email" className="" required=""/>
                      </div>
                      <div className="formOfInput">
                        <label  className="u-label">Message</label>
                        <textarea placeholder="" rows="4" cols="50" id="message-daf4" name="message" className="" required=""></textarea>
                      </div>
                      <div className="">
                        <input type="checkbox" id="agree-f183" name="agree" className="" required=""/>
                        <label className="">I accept the Terms of Service
                        </label>
                      </div>
                      <div className="">
                       
                        <button type="submit" className="buttonofC">Submit</button> 
                      </div>
                      <div className=""> Thank you! Your message has been sent. </div>
                      <div className=""> Unable to send your message. Please fix errors then try again. </div>
                      <input type="hidden" value="" name=""/>
                      </div>
                      <div className='imgdiv'>
                      <div Style={"margin-top: 10%;"}>
                  <h6 >Call us</h6>
                  <p className='p'>(+216) 56-789-154<br/>(+216) 98-789-154
                  </p>
                  <h6 >Localisation</h6>
                  <p className='p' >121 Rock Sreet, 21 Avenue,<br/>New York, NY 92103-9000
                  </p>
                 
                </div>
                         </div> 
                         </div>
                      </div>
                 
   
    
    

    </div>
    </>
  )
}
