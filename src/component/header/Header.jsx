import React from 'react'
import './header.css'
import avatar from '../../assets/img/avatar.jpg'
import Cta from './Cta.jsx'
import HeaderSocials from './HeaderSocials.jsx'

const Header = () => {
  return (
      <header id='header'>
          <div className="header__container container">
            <h5>Hello I'm</h5>
            <h1>Tấn Nhất</h1>
            <h5 className='text-light'>Front-end Developer</h5>

            <Cta />
            <HeaderSocials />
            <div className="me">
                <img src={avatar} alt="" />
            </div>
            <a href="#contact" className='scroll__down'>ScrollDown</a>
            
          </div>
      </header>
  )
}

export default Header