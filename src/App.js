import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Skills/>
      <Experience/>
      <Portfolio/>
      <Footer/>
    </>
  )
}

export default App