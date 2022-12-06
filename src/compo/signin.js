import React from 'react'
import './signin.css'

export default function Signin(props) {

    if(!props.show)
    {
        return null;
    }
  return (
        <>
        <div className="signin-modal">
         
            <div className="cancel" onClick={props.op}>
                <button onClick={props.onClose}>X</button>
                  </div>

            <div className="signin-head">
                <h1>Sign in</h1>
                <hr />
            </div>
            <div className="signmain-data">
               
                <input type="text" name="" id="" placeholder='Your Email' />
                <hr />
                
                <input type="text" name="" id="" placeholder='Your Password' />
                <hr />
            </div>

            <div className="main-footer">
                <button>Login</button>
            
            </div>

        </div>
        
        </>

  )
}
