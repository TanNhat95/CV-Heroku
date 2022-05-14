import React from 'react'
import Signin from '../../component/signin/Signin.jsx'
import Header from '../../component/header/Header.jsx'
import Nav from '../../component/nav/Nav.jsx'
import About from '../../component/about/About.jsx'
import Experience from '../../component/experience/Experience.jsx'
import Footer from '../../component/footer/Footer.jsx'
import Contact from '../../component/contact/Contact.jsx'
import Testimonial from '../../component/testimonial/Testimonial.jsx'
const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About/>
        <Experience/>
        <Testimonial/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App