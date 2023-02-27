import React, { useEffect } from 'react'
import Cursor from '../Cursor';
import "./Portfolio.css"
import Aos from "aos";
import "aos/dist/aos.css";
import Dropdown from '../Dropdown/Dropdown';
import GoTop from '../GoTop/GoTop';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Animation from '../Animation/Animation.js';
import Counter from '../Counter/Counter';
import {motion as m} from "framer-motion";


const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (

    
    <m.div initial={{opacity:0}} 
    animate={{opacity:1}}  
    transition={{duration:0.75, ease:"easeOut"}}
    exit={{opacity:1}}
    >
      <Cursor />

      <Dropdown />

      <Animation />

      <section id="projects" className="projects sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-bg">
            <span className="heading-secc__main">Projects</span>
            <span id='sub' className="heading-sec__sub">
              Here you will find some of the personal and clients
              projects that I
              created with each project containing its own case study
            </span>
          </h2>

          <div className="projects__content">
            <div className="jekt">
              <div data-aos="fade-up" className="projects__row">
                <div className="projects__row-img-cont">
                  <a href="https://be-black.vercel.app/"><img
                    src="images/portfolio/2.png"
                    alt="Software Screenshot"
                    className="projects__row-img"
                    loading="lazy"
                  /></a>
                </div>
                <div className="projects__row-content">
                  <div>
                    <p className="projects__row-content-desc">
                      BeBlack is a platform that I created where people
                      can join the
                      community of their favorite youtube channels and
                      can be part of
                      the conversation.
                    </p>
                  </div>
                  <div>
                    <a className='btn--med btn--theme dynamicBgClr'
                      href='https://be-black.vercel.app/' target='_blank'>BeBlack</a>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="projects__row">
                <div className="projects__row-img-cont">
                  <a href="https://roxy-phi.vercel.app/"><img
                    src="images/portfolio/1.png"
                    alt="Software Screenshot"
                    className="projects__row-img"
                    loading="lazy"
                  /></a>
                </div>
                <div className="projects__row-content">
                  <div>
                    <p className="projects__row-content-desc">
                      Roxy is a platform that I created where people
                      can join the
                      community of their favorite youtube channels and
                      can be part of
                      the conversation.
                    </p>
                  </div>
                  <div>
                    <a className='btn--med btn--theme dynamicBgClr'
                      href='https://roxy-phi.vercel.app/' target='_blank'>Roxy</a>
                  </div>
                </div>
              </div>
            </div>




            <div className="jekt">
              <div data-aos="fade-up" className="projects__row">
                <div className="projects__row-img-cont">
                  <a href="https://sentra.vercel.app/"><img
                    src="images/portfolio/4.png"
                    alt="Software Screenshot"
                    className="projects__row-img"
                    loading="lazy"
                  /></a>
                </div>
                <div className="projects__row-content">
                  <div>
                    <p className="projects__row-content-desc">
                      Sentra I re-created the frontend
                      because I got attracted to their beautiful UI.
                      It was a great experience for me to build the entire frontend.
                    </p>
                  </div>
                  <div>
                    <a className='btn--med btn--theme dynamicBgClr'
                      href='https://sentra.vercel.app/' target='_blank'>Sentra</a>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="projects__row">
                <div className="projects__row-img-cont">
                  <a href="https://univers-five.vercel.app/"><img
                    src="images/portfolio/5.png"
                    alt="Software Screenshot"
                    className="projects__row-img"
                    loading="lazy"
                  /></a>
                </div>
                <div className="projects__row-content">
                  <div>
                    <p className="projects__row-content-desc">
                      Univers is a Portfolio template that I created targeting
                      the restaurant
                      and food industry which anyone can use to
                      present their business
                      online.
                    </p>
                  </div>
                  <div>
                    <a className='btn--med btn--theme dynamicBgClr'
                      href='https://univers-five.vercel.app/' target='_blank'>Univers</a>
                  </div>
                </div>
              </div>
            </div>





            <div className="jekt">
              <div data-aos="fade-up" className="projects__row">
                <div className="projects__row-img-cont">
                  <a href="https://e-commerce-beryl-sigma.vercel.app/"><img
                    src="images/portfolio/3.png"
                    alt="Software Screenshot"
                    className="projects__row-img"
                    loading="lazy"
                  /></a>
                </div>
                <div className="projects__row-content">
                  <div>
                    <p className="projects__row-content-desc">
                      E-Commerce is a online shose shop and
                      transport company and
                      I created their website from scratch using the
                      frontend tools I
                      know.
                    </p>
                  </div>
                  <div>
                    <a className='btn--med btn--theme dynamicBgClr'
                      href='https://e-commerce-beryl-sigma.vercel.app/' target='_blank'>E-Commerce</a>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="projects__row">
                <div className="projects__row-img-cont">
                  <a href="https://kudzoka-chi.vercel.app/"><img
                    src="images/portfolio/6.png"
                    alt="Software Screenshot"
                    className="projects__row-img"
                    loading="lazy"
                  /></a>
                </div>
                <div className="projects__row-content">
                  <div>
                    <p className="projects__row-content-desc">
                      Kudzoka is a multiservice logistics and
                      transport company and
                      I created their website from scratch using the
                      frontend tools I
                      know.
                    </p>
                  </div>
                  <div>
                    <a className='btn--med btn--theme dynamicBgClr'
                      href='https://kudzoka-chi.vercel.app/' target='_blank'>Kudzoka</a>
                  </div>
                </div>
              </div>
            </div>






            <div className="jekt">
              <div data-aos="fade-up" className="projects__row">
                <div className="projects__row-img-cont">
                  <a href="https://service-company-five.vercel.app/"><img
                    src="images/portfolio/7.png"
                    alt="Software Screenshot"
                    className="projects__row-img"
                    loading="lazy"
                  /></a>
                </div>
                <div className="projects__row-content">
                  <div>
                    <p className="projects__row-content-desc">
                      Bizza is a multiservice logistics and
                      transport company and
                      I created their website from scratch using the
                      frontend tools I
                      know.
                    </p>
                  </div>
                  <div>
                    <a className='btn--med btn--theme dynamicBgClr'
                      href='https://service-company-five.vercel.app/' target='_blank'>Bizza</a>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="projects__row">
                <div className="projects__row-img-cont">
                  <a href="https://dabiz.vercel.app/"><img
                    src="images/portfolio/9.png"
                    alt="Software Screenshot"
                    className="projects__row-img"
                    loading="lazy"
                  /></a>
                </div>
                <div className="projects__row-content">
                  <div>
                    <p className="projects__row-content-desc">
                      Dabiz is a multiservice logistics and
                      transport company and
                      I created their website from scratch using the
                      frontend tools I
                      know.
                    </p>
                  </div>
                  <div>
                    <a className='btn--med btn--theme dynamicBgClr'
                      href='https://dabiz.vercel.app/' target='_blank'>Dabiz</a>
                  </div>
                </div>
              </div>
            </div>






            <div className="jekt">
              <div data-aos="fade-up" className="projects__row">
                <div className="projects__row-img-cont">
                  <a href="https://bldr-pearl.vercel.app/"><img
                    src="images/portfolio/8.png"
                    alt="Software Screenshot"
                    className="projects__row-img"
                    loading="lazy"
                  /></a>
                </div>
                <div className="projects__row-content">
                  <div>
                    <p className="projects__row-content-desc">
                      Bldr is a multiservice logistics and
                      transport company and
                      I created their website from scratch using the
                      frontend tools I
                      know.
                    </p>
                  </div>
                  <div>
                    <a className='btn--med btn--theme dynamicBgClr'
                      href='https://bldr-pearl.vercel.app/' target='_blank'>Bldr</a>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="projects__row">
                <div className="projects__row-img-cont">
                  <a href="#"><img
                    src="images/portfolio/10.png"
                    alt="Software Screenshot"
                    className="projects__row-img"
                    loading="lazy"
                  /></a>
                </div>
                <div className="projects__row-content">
                  <div>
                    <p className="projects__row-content-desc">
                      Gjfox is a multiservice logistics and
                      transport company and
                      I created their website from scratch using the
                      frontend tools I
                      know.
                    </p>
                  </div>
                  <div>
                    <a className='btn--med btn--theme dynamicBgClr'
                      href='#' target='_blank'>Gjfox</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Counter />

      <Contact />

      <Footer />

      <GoTop />

    </m.div>
  )
}

export default Portfolio