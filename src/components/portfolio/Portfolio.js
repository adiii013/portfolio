import React from 'react'
import './Project.css'
import notesAppMern from '../../assets/notes-app-mern.png'
import { Link } from 'react-router-dom'

function Project() {

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
    <section id='project'>
      <h2>Projects</h2>
      <Link to='/projects' className='btn btn-primary' style={{marginLeft:'50%',transform:'translateX(-50%)',marginBottom:"50px"}}>View All</Link>
      <div className="container project__container">
        {
          projects.map((project) => <article className='project__item'>
            <div className="project__item-image">
              <img src={notesAppMern} alt="" />
            </div>
            <h3>{project.description}</h3>
            <div className="project__item-cta">
              <a href={project.link} className='btn' rel="noreferrer" target='_blank'>Github</a>
              <a href={project.github} className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
            </div>
          </article>)
        }

      </div>
    </section>
  )
}

export default Project