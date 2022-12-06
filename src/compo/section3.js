import React from 'react'

export default function Section3() {
  return (
    <>
      <div className="head-sec3">  <h1>How it works</h1>
        <div className="hr"> <hr /> </div></div>

      

      <div className="main-sec">
        <div className='sec-data'><span>1.</span>
          <div className='icon'>
            <i class="fas fa-light fa-calendar-check"></i>
          </div>
          <p>Appointment every Wednesday 9am.</p>
        </div>
        <div className='sec-data'><span>2.</span>
          <div className='icon'><i class="fas fa-thin fa-tags"></i></div>
          <p>First come, first served. Our offers are in limited quantities, so be quick...</p>
        </div>
       
        <div className='sec-data'><span>3.</span>
          <div className='icon'>
            <i class="fas fa-thin fa-bullhorn"></i>
          </div>
          <p>New offers every week. New experiences, new surprises. Your Sundays will no longer be alike.</p>
        </div>

        <button className='btn3'>GET STARTED</button>
      </div>

    </>
  )
}
