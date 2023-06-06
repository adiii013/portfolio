import React from 'react'
import './Skills.css'

import {BsPatchCheckFill} from 'react-icons/bs'

function Skills() {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>Languages and Tools</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                 <BsPatchCheckFill className="experience__details-icon"/>
                 <div>
                 <h4>HTML</h4>
                 <small className="text-light">Experienced</small>
                 </div>
              </article>
              <article className="experience__details">
                 <BsPatchCheckFill className="experience__details-icon"/>
                 <div>
                 <h4>CSS</h4>
                 <small className="text-light">Experienced</small>
                 </div>
              </article>
              <article className="experience__details">
                 <BsPatchCheckFill className="experience__details-icon"/>
                 <div>
                 <h4>Bootstrap</h4>
                 <small className="text-light">Experienced</small>
                 </div>
              </article>
              <article className="experience__details">
                 <BsPatchCheckFill className="experience__details-icon"/>
                 <div>
                 <h4>Visual Studio Code</h4>
                 <small className="text-light">Experienced</small>
                 </div>
              </article>
              <article className="experience__details">
                 <BsPatchCheckFill className="experience__details-icon"/>
                 <div>
                 <h4>JQuery</h4>
                 <small className="text-light">Experienced</small>
                 </div>
              </article>
              <article className="experience__details">
                 <BsPatchCheckFill className="experience__details-icon"/>
                 <div>
                 <h4>React Js and React Native</h4>
                 <small className="text-light">Experienced</small>
                 </div>
              </article>
              <article className="experience__details">
                 <BsPatchCheckFill className="experience__details-icon"/>
                 <div>
                 <h4>Flutter and Dart</h4>
                 <small className="text-light">Experienced</small>
                 </div>
              </article>
            </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                 <BsPatchCheckFill className="experience__details-icon"/>
                 <div>
                 <h4>Mongodb</h4>
                 <small className="text-light">Experienced</small>
                 </div>
              </article>
              <article className="experience__details">
                 <BsPatchCheckFill className="experience__details-icon"/>
                 <div>
                 <h4>Firebase</h4>
                 <small className="text-light">Experienced</small>
                 </div>
              </article>
              <article className="experience__details">
                 <BsPatchCheckFill className="experience__details-icon"/>
                 <div>
                 <h4>Express</h4>
                 <small className="text-light">Experienced</small>
                 </div>
              </article>
              <article className="experience__details">
                 <BsPatchCheckFill className="experience__details-icon"/>
                 <div>
                 <h4>Javascript</h4>
                 <small className="text-light">Experienced</small>
                 </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills