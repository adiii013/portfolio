import React from 'react'
import './Nav.css'

/* Icons */ 
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {FaProductHunt} from 'react-icons/fa'

/* hook */

import {useState} from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  
  const[activeNav,setActiveNav] = useState('/')

  return (
    <nav>
      <Link href="/" onClick={()=>setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}><AiOutlineHome/></Link>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FaProductHunt/></a>
    </nav>
  )
}

export default Nav