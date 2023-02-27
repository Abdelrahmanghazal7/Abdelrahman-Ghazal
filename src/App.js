import React from 'react'
import Cursor from './Cursor';
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
import { motion as m } from "framer-motion";
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <m.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: "easeOut" }} exit={{ opacity: 0 }}>


      <Cursor />

      <Navbar />

      <ToastContainer
    position="top-left"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss={false}
    draggable={false}
    pauseOnHover
    theme="dark"
      />

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

    </m.div>
  )
}

export default App
