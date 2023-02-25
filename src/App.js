import React from 'react'
// import Cursor from './Cursor';
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import Services from './Services/Services'
import Slide from "./Slide/Slide";
import ExpertIse from './ExpertIse/ExpertIse'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import About from './About/About'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import GoTop from './GoTop/GoTop'
import './App.css'

const App = () => {
  return (
    <div>

      {/* <Cursor /> */}

      <Navbar />

      <Header />

      <Services />

      <Slide />

      <ExpertIse />

      <Projects />

      <Skills />

      <About />

      <Contact />

      <Footer />

      <GoTop />

    </div>
  )
}

export default App
