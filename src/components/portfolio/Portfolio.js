import React from 'react'
import './Portfolio.css'
import notesAppMern from '../../assets/notes-app-mern.png'

function Portfolio() {

  const projects = [
    {
      'title': "Notes App",
      'description': "Simple Full Stack App To Store Notes",
      'link': 'https://github.com/adiii013/notes-app-mern',
      'github': 'https://notes-app-p8tx.onrender.com/'
    },
    {
      'title': "Movie Mania",
      'description': "To describe the list of movies from the given keywords",
      'link': 'https://movie-app-mern.vercel.app/',
      'github': 'https://github.com/adiii013/movie-app-mern'
    }
  ]

  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          projects.map((project) => <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={notesAppMern} alt="" />
            </div>
            <h3>{project.description}</h3>
            <div className="portfolio__item-cta">
              <a href={project.link} className='btn' rel="noreferrer" target='_blank'>Github</a>
              <a href={project.github} className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
            </div>
          </article>)
        }

      </div>
    </section>
  )
}

export default Portfolio