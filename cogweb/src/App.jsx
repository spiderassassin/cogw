import React from 'react'
import About from './Components/About/About'
import Contact from './Components/Contact/contact'
import IB from './Components/IB/IB'
import IB_desc from './Components/IB_desc/IB_desc'
import NavBar from './Components/NavBar/NavBar'

const App = () => {
  return (
    <div>
      <NavBar/>
      <IB/>
      <IB_desc/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App

