import React from 'react'
import './IB.css'
import videobg from '../../assets/trailer.mp4'
import steam from '../../assets/steam.svg'
const IB = () => {
  return (
    <div className='IB'>
      <a href="https://store.steampowered.com/app/3041890/Infernal_Bloodrush/">
      <video className="vid" autoPlay loop muted src={videobg}/>
      {
      <div className="content">
          <button>
          <img src={steam} alt="" className='steam' />
              <h1>Check out on Steam</h1>
              </button>
      </div>
      }
      </a>
    </div>
  )
}

export default IB
