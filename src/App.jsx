import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './componets/Hero.jsx'
import Features from './componets/Features.jsx'
import Workflow from './componets/WorkFlow.jsx'
import Vision from './componets/Vision.jsx'
import FAQ from './componets/FAQ.jsx'
import Network from './componets/Network.jsx'
import Footer from './componets/Footer.jsx'
import React from 'react'

function App() {
  return (
    <div>
      <Hero />
      <Features />
      <Workflow />
      <Vision />
      <FAQ />
      <Network />
      <Footer />
    
    </div>
  )
}

export default App