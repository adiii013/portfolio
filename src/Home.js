import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Footer from './components/footer/Footer'
import Checkout from './components/checkout/Checkout'


function Home() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Checkout/>
      <Footer/>
    </>
  )
}

export default Home