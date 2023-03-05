import React, { useEffect } from 'react'
import "./Education.css"
import Aos from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="aboutme" className="container pt-5">
      <div className="row">
        <div data-aos="fade-right" className="col-md-6 wow fadeInRight">
          <h2 id="fw-normal">Education</h2>
          <ul className="timeline mt-4 pr-md-5">
            <li>
              <div className="title">2021</div>
              <div className="details">
                <h5>CS50</h5>
                <small className="fg-theme">Online Course</small>
                <p>using coding languages like HTML, CSS, and JavaScript
                  to construct web designs, also involved in building
                  systems, developing software architecture, and
                  translating business logic into solutions.</p>
              </div>
            </li>
            <li>
              <div className="title">2022</div>
              <div className="details">
                <h5>Front-End Development</h5>
                <small className="fg-theme">Mag Camp</small>
                <p>Includs Computer Science for Web Programming - a more
                  in-depth look at HTML, CSS, and JavaScript, as well as
                  frameworks including Reactjs and Angular Introduction to
                  Artificial Intelligence with Python - covers search
                  algorithms, machine learning, Introduction to Game
                  Development.</p>
              </div>
            </li>
          </ul>
        </div>


        <div className="col-md-6">
          <div className="about__content-skills">
            <div className="skills">
              <div data-aos="flip-left" className="skills__skill">HTML</div>
              <div data-aos="flip-left" className="skills__skill">CSS</div>
              <div data-aos="flip-left" className="skills__skill">JavaScript</div>
              <div data-aos="flip-left" className="skills__skill">Reactjs</div>
              <div data-aos="flip-left" className="skills__skill">SASS</div>
              <div data-aos="flip-left" className="skills__skill">SCSS</div>
              <div data-aos="flip-left" className="skills__skill">Bootstrab</div>
              <div data-aos="flip-left" className="skills__skill">TypeScript</div>
              <div data-aos="flip-left" className="skills__skill">API</div>
              <div data-aos="flip-left" className="skills__skill">OOP</div>
              <div data-aos="flip-left" className="skills__skill">GIT</div>
              <div data-aos="flip-left" className="skills__skill">Github</div>
              <div data-aos="flip-left" className="skills__skill">SEO</div>
              <div data-aos="flip-left" className="skills__skill">Responsive Design</div>
              <div data-aos="flip-left" className="skills__skill">Terminal</div>
              <div data-aos="flip-left" className="skills__skill">Node.js</div>
            </div>
          </div>

          <div className='logos'>

            <img src='images/html.png'></img>
            <img src='images/css.png'></img>
            <img src='images/js.png'></img>
            <img src='images/bootstrap.png'></img>
            <img src='images/react.png'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education