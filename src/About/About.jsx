import React, { useEffect, useState } from 'react'
import "./About.css"
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id='about' className='ser'>
      <div className="us">
        <div id="service" className="paddsection">
          <div className="container">
            <div className="row justify-content-between">

              <div className="col-lg-4">
                <div className="div-img-bg">
                  <div className="about-img">
                    <img data-aos="zoom-out" src="images/Me.jpeg" className="img-responsive" alt="me" />
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="about-descr">

                  <p data-aos="fade" className="p-heading">I am a front-end developer</p>
                  <p data-aos="fade-up" className="separator">Well-versed executing front-end web
                    development using HTML and CSS, with an in-depth knowledge of
                    Media Query. Adept at working with frameworks like React to
                    successfully execute cross-platform UI interfaces.
                    To seek and maintain full or part-time position that offers
                    professional challenges utilizing interpersonal skills,
                    excellent time management and problem-solving skills.
                  </p>

                  <img className='elementor-element' src="https://tamalsen.dev/wp-content/uploads/2021/12/hello-world-html-code-768x384.png" alt='' />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About