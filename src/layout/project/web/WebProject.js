import React from 'react'
import notesAppMern from '../../../assets/notes-app-mern.png'
import Movie from '../../../assets/Movie.png'

import './WebProject.css'

function WebProject() {
  const projects = [
    {
      'title': "Notes App",
      'description': "Simple Full Stack App To Store Notes",
      'image':`${notesAppMern}`,
      'link': 'https://github.com/adiii013/notes-app-mern',
      'github': 'https://notes-app-p8tx.onrender.com/'
    },
    {
      'title': "Movie Mania",
      'description': "Shows the list of all movies with given keywords using imdb api",
      'image':`${Movie}`,
      'link': 'https://movie-app-mern.vercel.app/',
      'github': 'https://github.com/adiii013/movie-app-mern'
    }
  ]

  return (
    <>
      <h2>Projects</h2>
      <div className="container project__container">
        {
          projects.map((project) => <article className='project__item'>
            <div className="project__item-image">
              <img src={project.image} alt="" />
            </div>
            <h3>{project.description}</h3>
            <div className="project__item-cta">
              <a href={project.link} className='btn' rel="noreferrer" target='_blank'>Github</a>
              <a href={project.github} className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
            </div>
          </article>)
        }

      </div>
      </>
  )
}


export default WebProject