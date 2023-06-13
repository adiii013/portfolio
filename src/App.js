import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import WebProject from './layout/project/web/WebProject'
import Experience from './layout/experience/Experience'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/project/web' element={<WebProject/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App