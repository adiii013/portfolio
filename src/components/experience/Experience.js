import React, { useState } from 'react'
import './Experience.css'
import CV from '../../assets/resume.pdf'

function Experience() {
  const [description, setDescription] = useState('')
  const internships = [
    {
      'company': "Matlync",
      'role': "Flutter Developer Intern",
      'date':"13 August 2022 - 13 September 2022",
      'description': "The internship is basically the educational site which offers the courses and test series to the students. As like of unacademy, coding ninja it is some what similar to them.I have developed the frontend code fro their particular figma file. Also integrated the backend for auth purpose and displaying the details into the app. Along with that I then added the payment gateway to buy the course or test series\nDisplays all the data fetched from the servers through the api and also able to buy the course.",
    },
    {
      'company': "EasyOps",
      'date':"13 February 2023 - 22 March 2023",
      'role': "Software Developer Intern",
      'description': "To work on their free lancing internships which may be crud application with fully functioning backend\nDesigning the tasks assigned on jira software and writing the test cases for that code\nTesting code, backend, response web design",
    }
  ]

  return (
    <section id='portfolio'>
      <h2>Experience</h2>
      <div className="container portfolio__container">
        {
          internships.map((internship) => <article className='portfolio__item'>
            <h3 style={{ marginBottom: "5px" }}>Company: {internship.company}</h3>
            <h5>Date: {internship.date} </h5>
            <h5>Role: {internship.role}</h5>
            <p>{(description === internship.title) ? internship.description : internship.description.substring(0, 200)}  <span onClick={() => (description === internship.title)? setDescription('') :setDescription(internship.title)} style={{ color: 'blue' }}>{(description === internship.title) ? "Read Less" : "Read More"}</span></p>
            <div className="portfolio__item-cta">
              <a href={CV} download className='btn'>Download Offer Letter</a>
            </div>
          </article>)
        }

      </div>
    </section>
  )
}

export default Experience