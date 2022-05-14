import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.facebook.com/profile.php?id=100008080188695" target="_blank"><BsFacebook/></a>
        <a href="http://github.com" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials