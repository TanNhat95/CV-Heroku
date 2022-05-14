import React from 'react'
import CV from '../../assets/img/CV_Main.pdf'
const Cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='button'>My CV</a>
        <a href="#contact" className='button button-primary'>Let's Talk</a>
    </div>
  )
}

export default Cta