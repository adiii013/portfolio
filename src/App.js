import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Project from './layout/project/Project'
import Experience from './layout/experience/Experience'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Project/>}/>
          <Route path='/experience' element={<Experience/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App