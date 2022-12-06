import React from 'react'
import '../index.css'
import { useState } from 'react';
import Signin from './signin';
import Signup from './signup';


export default function () {
  
  const [show ,setShow] = useState(false);
  const [signupshow ,setSignupShow] = useState(false);


  const clicked =(e) =>{
    e.preventDefault();
    setShow(true);
  }

  const signupClicked =(e) =>{
    e.preventDefault();
    setSignupShow(true);
  }
  return (
      <div className="containe">
       <div className="left">
        <h2>TRavel</h2>
        </div>
        <div className="right">
     
        <a href="" onClick={clicked} >SIGN IN</a>
       
        <Signin show ={show}   onClose={()=> setShow(false)} />
       
        <a href="" onClick={signupClicked}>SIGN UP</a>
        <Signup  signupshow={signupshow} onClose ={()=>{setSignupShow(false)}}/>
        </div>
      </div>
     )
}
