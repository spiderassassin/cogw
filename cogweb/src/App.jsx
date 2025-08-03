import React from 'react'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import IB from './Components/IB/IB'
import SNE from './Components/SNE/SNE'
import IB_desc from './Components/IB_desc/IB_desc'
import SNE_desc from './Components/SNE_desc/SNE_desc'
import NavBar from './Components/NavBar/NavBar'

const App = () => {
  return (
    <div>
      <NavBar/>
      <SNE/>
      <SNE_desc/>
      <IB/>
      <IB_desc/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App

