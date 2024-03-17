import { useState } from 'react'
import './styles/App.css'
import './styles/bootstrap.min.css'
import Navbar from './components/Navbar,'
import Bio from './components/Bio'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <Navbar />
      <Bio />
      <hr/>
      <Projects />
      <Skills />
    </>
  )
}

export default App
