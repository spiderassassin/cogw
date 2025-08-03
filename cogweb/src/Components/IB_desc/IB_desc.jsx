import React from 'react'
import titletext from '../../assets/titletext.png'
import './IB_desc.css'
import steam from '../../assets/steam.svg'
const IB_desc = () => {
  return (
    <div className='IB_desc'>
      
      
      <div className="desc">

      <h1>A 2.5d first-person doomlike where instead of shooting bullets,
           you burn through a horde of demons with fire magic.</h1>

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
