import React from 'react'
import './SNE.css'
import videobg from '../../assets/websitevideo.mp4'
import steam from '../../assets/steam.svg'
import discord from '../../assets/discord.png'
const IB = () => {
  return (
    <div className='SNE'>
      <a href="https://discord.com/invite/GsrrGxVPfd">
      <video className="vid" autoPlay loop muted src={videobg}/>
      
      <div className="content">
          <button>
          <img src={discord} alt="" className='steam' />
              <h1>Check out our Discord for updates</h1>
              </button>
      </div>
      </a>
      
    </div>
  )
}

export default IB
