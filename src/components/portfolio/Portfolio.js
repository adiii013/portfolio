import React from 'react'
import './Portfolio.css'
import notesAppMern from '../../assets/notes-app-mern.png'
import IMG4 from '../../assets/portfolio4.jpg'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={notesAppMern} alt="" />
          </div>
          <h3>Notes App to store users notes</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/adiii013/notes-app-mern" className='btn' target='_blank'>Github</a>
          <a href="https://notes-app-p8tx.onrender.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="" className='btn'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio