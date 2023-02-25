import React, { useEffect } from 'react'
import "./Projects.css"
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";


const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id='portfolio' className='container-fluid'>
      <div className='row'>
        <div className='rk col-xl-7 col-md-7 col-sm-7'>
          <h1 data-aos="fade-down" className='head'>My <br /> Work</h1>

          <p data-aos="fade-up" className='work'>Deployed scalable travel, event and telemedicine web and hybrid mobile apps using React SPA and PWA.
            Collaborated in 140+ projects with 50+ clients all around the world. I am also interested in data analytics and visualization.</p>
        </div>



        <div className='dire col-xl-5 col-md-5 col-sm-5'>
          <img data-aos="fade-up-right" src="images/2.png" alt="arrow" id='arrow' />
          <br />
          <br />
          <Link className='view' to="/Portfolio">View Projects</Link>


        </div>
      </div>
    </div>
  )
}

export default Projects