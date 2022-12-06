import React from 'react'
import '../index.css'

export default function Section() {
  return (
    <>    <div className="main-sec">
        <div className='sec-data'>
      <div className='icon'>
        <i class=" fas fa-duotone fa-square-h"></i></div>
            <h5>THE BEST LUXURY HOTELS</h5>
            <p>From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few subway stops away from your home.</p>
        </div>
        <div className='sec-data'>
      <div className='icon'> <i class="fas fa-thin fa-dharmachakra"></i></div>
            <h5>NEW EXPERIENCES</h5>
            <p>Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… your Sundays will not be alike..</p>
        </div>  
        <div className='sec-data'>
      <div className='icon'>


      <i class="fas fa-light fa-wallet"></i>
      </div>
            <h5>EXCLUSIVE RATES</h5>
            <p>By registering, you will access specially negotiated rates that you will not find anywhere else.</p>
        </div>
    </div>
        
    </>

  )
}
