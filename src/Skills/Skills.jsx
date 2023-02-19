import React, { useEffect } from 'react'
import "./Skills.css"
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() =>{
    Aos.init({duration: 1000});
  }, []);
  return (
        <div id="skills" className="container py-5">
            <h1 id='ex' className="text-center fw-normal wow fadeIn">My Skills</h1>
            <div className="row py-3">
              <div className="col-md-6">
                <div className="px-lg-3">
                  <h4 className="hd fadeInUp">Coding skills</h4>
                  <div className="progress-wrapper wow fadeInUp">
                    <span className="caption">JavaScript</span>
                    <div className="progress">
                      <span data-aos="slide-right" className="progress-bar" style={{width: "86%"}}>86%</span>
                    </div>
                  </div>

                  <div className="progress-wrapper wow fadeInUp">
                    <span className="caption">HTML + CSS</span>
                    <div className="progress">
                      <span data-aos="slide-right" className="progress-bar" style={{width: "100%"}} data-width="100%">100%</span>
                    </div>
                  </div>

                  <div className="progress-wrapper wow fadeInUp">
                    <span className="caption">Bootstrap</span>
                    <div className="progress">
                      <span data-aos="slide-right" className="progress-bar" style={{width: "80%"}}>80%</span>
                    </div>
                  </div>

                  <div className="progress-wrapper wow fadeInUp">
                    <span className="caption">React js</span>
                    <div className="progress">
                      <span data-aos="slide-right" className="progress-bar" style={{width: "90%"}}>90%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="px-lg-3">
                  <h4 id='des' className="hd fadeInUp">Design Skills</h4>
                  <div className="progress-wrapper wow fadeInUp">
                    <span className="caption">UI / UX Design</span>
                    <div className="progress">
                      <span data-aos="slide-right" className="progress-bar" style={{width: "92%"}}>92%</span>
                    </div>
                  </div>
                  <div className="progress-wrapper wow fadeInUp">
                    <span className="caption">Web Design</span>
                    <div className="progress">
                      <span data-aos="slide-right" className="progress-bar" style={{width: "99%"}}>99%</span>
                    </div>
                  </div>
                  <div className="progress-wrapper wow fadeInUp">
                    <span className="caption">Logo Design</span>
                    <div className="progress">
                      <span data-aos="slide-right" className="progress-bar" style={{width: "79%"}}>79%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Skills