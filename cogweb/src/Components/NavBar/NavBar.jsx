import React, { useEffect } from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './NavBar.css'
import logo from '../../assets/coglogo.png'
import titletext from '../../assets/titletext.png'
import instagram from '../../assets/insta.png'
import discord from '../../assets/discord.png'
import youtube from '../../assets/youtube.png'
const NavBar = () => {
  useEffect(()=>{},[]);
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo' />
      <ul>
        
      <li><Link to='aboutsection' smooth={true} offset={-100} duration={500} ><button className='btn'>About us</button></Link></li>
        <li><Link to='contact' smooth={true} offset={0} duration={500} ><button className='btn'>Contact us</button></Link></li>
        <li><Link to='IB' smooth={true} offset={0} duration={500} ><button className='btn-icon'><img src={titletext} alt="" className='title' /></button></Link></li>
        <li><a href="https://www.instagram.com/cogstudiosinc"><button className='btn-icon'><img src={instagram} alt="" className='icons' /></button></a></li>
        <li><a href="https://discord.com/invite/GsrrGxVPfd"><button className='btn-icon'><img src={discord} alt="" className='icons' /></button></a></li>
        <li><a href="https://www.youtube.com/@CouncilofGamers-qo5yp"><button className='btn-icon'><img src={youtube} alt="" className='icons' /></button></a></li>
        
      </ul>
    </nav>
  )
}

export default NavBar
