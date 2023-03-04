import React, { useEffect, useState } from 'react'
import Cursor from './Cursor';
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import About from './About/About'
import Slide from "./Slide/Slide";
import ExpertIse from './ExpertIse/ExpertIse'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Education from './Education/Education'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import GoTop from './GoTop/GoTop'
import './App.css'
import { motion as m } from "framer-motion";
import { ToastContainer } from 'react-toastify';
import CircleLoader from "react-spinners/CircleLoader";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])
  return (
    <m.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.75, ease: "easeOut" }} exit={{ opacity: 0 }}>

      <Cursor />

      {loading ?
        <div className="preloader">
          <CircleLoader color={'#9b37ff'} loading={loading} size={100} height={100} margin={10} />
        </div> :
        <>

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

      <About />

      <Slide />

      <ExpertIse />

      <Projects />

      <Skills />

      <Education />

      <Contact />

      <Footer />

      <GoTop />

      </>
      }

    </m.div>
  )
}

export default App
