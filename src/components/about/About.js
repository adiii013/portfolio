import React from 'react'
import './About.css'
import Me from '../../assets/me-about.jpg'

import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


function About() {
  return (
    <section id='about' className='about'>
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
              <small>Fresher</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Coding problem solved</h5>
              <small>500+</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Web Projects</small><br/>
              <small>10+ Android projects</small>
            </article>
          </div>

          <p>As a skilled software developer with 6 month of experience, I
specialize in developing high-quality software solutions that are
customized to meet the unique needs of each project. With
expertise in Web and Android Field, I am adept at creating efficient
and user-friendly applications for web and mobile platforms. I am
dedicated to staying up-to-date with the latest developments in
the field, and I am committed to delivering projects on time and
within budget. Let's work together to create the next innovative
software solution.</p>

          <a href="#portfolio" className="btn btn-primary">Projects</a>
        </div>
      </div>
    </section>
  )
}

export default About