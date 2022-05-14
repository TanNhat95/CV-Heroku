import React from 'react'
import './experience.css'
import {HiOutlineBadgeCheck} from 'react-icons/hi'
import {RiCheckboxBlankCircleLine} from 'react-icons/ri'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      <div className="container container__experience">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <HiOutlineBadgeCheck className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <HiOutlineBadgeCheck className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <HiOutlineBadgeCheck className="experience__details-icon"/>
              <div>
                <h4>Javscript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <RiCheckboxBlankCircleLine className="experience__details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

          </div>
        </div>

        <div className="experience__future">
          <h3>Orientation</h3>
          <div className="experience__content">
            <article className="experience__details">
              <RiCheckboxBlankCircleLine className="experience__details-icon"/>
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <RiCheckboxBlankCircleLine className="experience__details-icon"/>
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <RiCheckboxBlankCircleLine className="experience__details-icon"/>
              <div>
                <h4>Redux</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <RiCheckboxBlankCircleLine className="experience__details-icon"/>
              <div>
                <h4>SASS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience