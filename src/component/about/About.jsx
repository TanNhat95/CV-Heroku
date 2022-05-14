import React from 'react'
import './about.css'
import AvatarAbout from '../../assets/img/avatar-about.jpg'
import {FaAward,FaFolderPlus} from 'react-icons/fa'
import {MdLanguage} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me!!</h2>
      <div className="container container__about">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AvatarAbout} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>&lt; 1 year working</small>
            </article>

            <article className="about__card">
              <MdLanguage className='about__icon'/>
              <h5>Language</h5>
              <small>2+</small>
            </article>

            <article className="about__card">
              <FaFolderPlus className='about__icon'/>
              <h5>Project</h5>
              <small>5+ completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod inventore totam cumque ipsa officia corporis quia est exercitationem ullam magni odio ut pariatur placeat, ratione maiores. Quia facilis sed iusto.
          </p>
          <a href="#contact" className="button button-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About