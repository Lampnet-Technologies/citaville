import React from 'react'
import Hero from '../Components/HomePageComponents/Hero'
import OurSchool from '../Components/HomePageComponents/OurSchool'
import {Faqs, Investing, LatestNews, LearnLatestSkill, OurCourses, OurOfferings, Testimonials} from '../Components/HomePageComponents/OurCourses'
import { Fa0 } from 'react-icons/fa6'
import Footer from '../Components/Footer'


const HomePage = ({ onRegisterClick }) => {
  return (
    <main>
      <Hero onRegisterClick={onRegisterClick} />
      <OurSchool />
      <OurCourses/>
      <LearnLatestSkill onRegisterClick={onRegisterClick} />
      <LatestNews />
      <OurOfferings />
      <Testimonials />
      <Faqs/>
      <Investing />
      <Footer />
    </main>
  )
}

export default HomePage
