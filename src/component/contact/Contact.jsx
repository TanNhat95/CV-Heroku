import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
import {AiOutlineMail,AiOutlineMessage,AiFillLinkedin} from 'react-icons/ai'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jg1vozh', 'template_0af6rt3', form.current, 'hcr0SiMaxZ8UdT4-J')
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me!!!</h2>
      <div className="container container__contact">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nguyentannhat246@gmail.com</h5>
            <a href="mailto:nguyentannhat246@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <AiOutlineMessage className='contact__option-icon'/>
            <h4>Message</h4>
            <h5>Tấn Nhất</h5>
            <a href="https://facebook.com/messages/t/100008080188695" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <AiFillLinkedin className='contact__option-icon'/>
            <h4>Linked</h4>
            <h5>Tấn Nhất</h5>
            <a href="https://facebook.com/messages/t/100008080188695" target='_blank'>Send a message</a>
          </article>
        </div>

        <form action="" ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required  autoComplete='off'/>
          <input type="email" name='email' placeholder='Your Email' required autoComplete='off'/>
          <textarea name="message" rows="7" placeholder='Your Message' required autoComplete='off'></textarea>
          <button type='submit' className='button button-primary'>Send your message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact