import React from 'react'
import './testimonial.css'
import Ava from '../../assets/img/avatar-about.jpg'
import Ava2 from '../../assets/img/avatar2.jpg'
import Ava3 from '../../assets/img/avatar3.jpg'
import Ava4 from '../../assets/img/avatar4.jpg'
import Ava5 from '../../assets/img/avatar5.jpeg'
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
const data = [
  {
    avatar:Ava,
    name: 'Tan Nhat',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolores quod architecto! Quasi nemo temporibus dolore eum nisi culpa, rem quisquam sequi nesciunt quam perspiciatis, assumenda eaque, quibusdam neque at.'
  },
  {
    avatar:Ava2,
    name: 'Gdragon',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolores quod architecto! Quasi nemo temporibus dolore eum nisi culpa, rem quisquam sequi nesciunt quam perspiciatis, assumenda eaque, quibusdam neque at.'
  },
  {
    avatar:Ava3,
    name: 'Mr Tap',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolores quod architecto! Quasi nemo temporibus dolore eum nisi culpa, rem quisquam sequi nesciunt quam perspiciatis, assumenda eaque, quibusdam neque at.'
  },
  {
    avatar:Ava4,
    name: 'Young Bae',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolores quod architecto! Quasi nemo temporibus dolore eum nisi culpa, rem quisquam sequi nesciunt quam perspiciatis, assumenda eaque, quibusdam neque at.'
  },
  {
    avatar:Ava5,
    name: 'Dimsum',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolores quod architecto! Quasi nemo temporibus dolore eum nisi culpa, rem quisquam sequi nesciunt quam perspiciatis, assumenda eaque, quibusdam neque at.'
  }
]
const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review form clients</h5>
      <h2>Testimonials</h2>

      <div className="container__testimonial container">
      <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index}>
                <article className="testimonial">
                  <div className="client__avatar">
                    <img src={avatar} alt="" />
                  </div>
                  <h5 className="client__name">{name}</h5>
                  <small className="client__review">
                    {review}
                  </small>
                </article>
            </SwiperSlide>
            )
          })
        }
    </Swiper>
        
      </div>
    </section>
  )
}

export default Testimonial