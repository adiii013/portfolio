import React, { useState } from 'react'
import './Experience.css'
import CV from '../../assets/resume.pdf'

function Experience() {
  const experiences = [
    {
      company: "Matlync",
      role: "Flutter Developer Intern",
      date:"13 August 2022 - 13 September 2022",
      tasksPerformed:[
        {task:"Optimized the user interface by implementing significant improvements and meticulously resolving any encountered bugs  within the codebase"},
        {task:"Streamlined user authentication process via successful integration of an authentication system utilizing Google Sign-In; reduced login wait time by 50% and increased user satisfaction by 20%"},
        {task:"I successfully registered the app on the Google Cloud Platform, enabling its presence on the Google Play Store. This\n      strategic step strengthened its visibility and extended its reach to a broader audience."},
        {task:"Methodically incorporated essential components under the guidance of experienced mentors, adhering closely to their\n recommendations and instructions to ensure optimal functionality and maintain code quality"}
      ],
    },
    {
      company: "EasyOps",
      role: "Software Developer Intern",
      date:"13 February 2023 - 22 March 2023",
      tasksPerformed:[
        {task:"I actively engaged in daily stand-up meetings and consistently attended all scheduled meetings"},
        {task:" I actively engaged in the project under the guidance and mentorship of senior members, leveraging their expertise and insights"},
        {task:"I fostered effective collaboration within the team, actively leveraging version control tools to streamline our workflow and ensure seamless coordination of efforts."},
        {task:"I leveraged Jira software to proficiently manage tasks, optimizing organization, prioritization, and collaboration. This enriched overall project productivity."}
      ],
    },
  ]

  return (
    <div>
      <h2>Experience</h2>
      <div className="experience__container">
        {
          experiences.map((experience) => <div className='experience__card'>
            <h2 style={{ marginBottom: "5px" }}>Company: {experience.company}</h2>
            <h5>Date: {experience.date} </h5>
            <h5>Role: {experience.role}</h5>
            <ul className='experience__container__list'>
            {
              experience.tasksPerformed.map((task)=><li>• {task.task}</li>)
            }
            </ul>
            <div className="experience__container__btn">
              <a href={CV} download className='btn'>Download Offer Letter</a>
            </div>
          </div>)
        }

      </div>
    </div>
  )
}

export default Experience