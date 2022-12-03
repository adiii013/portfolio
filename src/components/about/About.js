import React from 'react'
import './About.css'
import Me from '../../assets/me-about.jpg'

import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


function About() {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>about me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>5 yrs of experience</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Experience</h5>
              <small>80+ Completed projects</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quos placeat doloremque iste, inventore tempora impedit est officiis, beatae non esse ad, dicta quia magni quisquam eius amet veniam quibusdam?</p>

          <a href="#contact" className="btn btn-primary">Lets Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About