// import React from 'react'
// // import Cursor from './Cursor';
// import Navbar from './Navbar/Navbar'
// import Header from './Header/Header'
// import Services from './Services/Services'
// import Slide from "./Slide/Slide";
// import ExpertIse from './ExpertIse/ExpertIse'
// import Projects from './Projects/Projects'
// import Skills from './Skills/Skills'
// import About from './About/About'
// import Contact from './Contact/Contact'
// import Footer from './Footer/Footer'
// import GoTop from './GoTop/GoTop'
import Test from './Test'
import './App.css'
import {motion as m} from "framer-motion";


const App = () => {
  return (
    <m.div initial={{opacity:0}} 
    animate={{opacity:1}}  transition={{duration:0.75, ease:"easeOut"}} exit={{opacity:0}}>

      <Test />

      {/* <Cursor />

      <Navbar />

      <Header />

      <Services />

      <Slide />

      <ExpertIse />

      <Projects />
      
      <Skills />

      <About />

      <Contact /> 

      <Test />

      <Footer />

      <GoTop /> */}

    </m.div>
  )
}

export default App
