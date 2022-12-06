import React from 'react'
import './signup.css'


export default function Signup(props) {
    if(!props.signupshow)
    {
        return null;
    }
  return (
    <div className="signup-modal">
         
            <div className="cancel">
                <button onClick={props.onClose}>X</button>
                  </div>

            <div className="signup-head">
                <h1>Sign up</h1>
                <hr />
            </div>
            <div className="sigupmain-data">
               
                <input type="text" name="" id="" placeholder='Your Name' />
                <hr />
                <input type="text" name="" id="" placeholder='Your Email' />
                <hr />
              
                <input type="text" name="" id="" placeholder='Your Password' />
                <hr />
              
                <input type="text" name="" id="" placeholder='Your Phone NUmber' />
                <hr />
               
            </div>

            <div className="signup-footer">
                <button>Create Account</button>
            
            </div>

        </div>
        
  )
}
