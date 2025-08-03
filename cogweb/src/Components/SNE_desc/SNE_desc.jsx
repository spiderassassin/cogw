import React from 'react'
import titletext from '../../assets/logo2.png'
import Clown from '../../assets/Clown.png'
import './SNE_desc.css'
import steam from '../../assets/steam.svg'
const IB_desc = () => {
  return (
    <div className='SNE_desc'>
      
      
      <div className="desc">
      <h1>A horror game that uses the webcam to detect whether your eyes are open or closed. When your refuge from the outside world becomes haunted, you must either confront the horrors—or close your eyes.
      </h1>
      <img src={titletext} alt="" className='titlepic' />
      
      

      {/*<div className="steaml">
          <button>
          <img src={steam} alt="" className='steam' />
              <h1>Check out on Steam</h1>
              </button>
  </div>*/}
      </div> 
    
    </div>
    
  )
}

export default IB_desc
