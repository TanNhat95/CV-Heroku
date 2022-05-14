import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser,AiOutlineContacts} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'

const Nav = () => {
    const [activeNav,setActiveNav] = useState('#');
  return (
    <nav>
        <a href="#" 
            className={activeNav==='#' ? 'active':''}
            onClick={()=>setActiveNav('#')}
        >
            <AiOutlineHome/>
        </a>
        <a href="#about" 
            onClick={()=>setActiveNav('#about')}
            className={activeNav==='#about' ? 'active':''}
        >
            <AiOutlineUser/>
        </a>
        <a href="#experience"
            onClick={()=>setActiveNav('#experience')}
            className={activeNav==='#experience' ? 'active':''}
        >
            <BsBook/>
        </a>
        <a href="#contact"
            onClick={()=>setActiveNav('#contact')}
            className={activeNav==='#contact' ? 'active':''}
        >
            <AiOutlineContacts/>
        </a>
    </nav>
  )
}

export default Nav