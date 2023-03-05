import React, { useEffect, useCallback } from 'react'
import "./Portfolio.css"
import Cursor from '../Cursor';
import Dropdown from '../Dropdown/Dropdown';
import Counter from '../Counter/Counter';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import GoTop from '../GoTop/GoTop';
import Aos from "aos";
import "aos/dist/aos.css";
import { motion as m } from "framer-motion";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Portfolio = () => {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (

    <m.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <Cursor />

      <Dropdown />

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          style: {
            position: "absolute",
            height: "500%",
            top: "500px",
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#000",
            },
            links: {
              color: "#000",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 2, max: 6 },
            },
          },
          detectRetina: true,
        }}
      />

      <section id="projects" className="projects sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-bg">
            <span className="heading-main">Projects</span>
            <span className="heading-secc__main">
              <img className='brace' src='images/left brace.png' alt='left'></img>
              Projects
              <img id='bra' className='brace' src='images/right brace.png' alt='right'></img>
            </span>
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
                      BeBlack Shows your beliefs, skills, qualifications, education, training, and experiences.
                      It provides insight into your personality and work ethic.
                    </p>
                  </div>
                  <div>
                    <a className='btn--med btn--theme dynamicBgClr'
                      href='https://be-black.vercel.app/' target='_blank' rel='noreferrer'>BeBlack</a>
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
                      the personal qualifications
                      which anyone can use to
                      present their business
                      online.
                    </p>
                  </div>
                  <div>
                    <a className='btn--med btn--theme dynamicBgClr'
                      href='https://univers-five.vercel.app/' target='_blank' rel='noreferrer'>Univers</a>
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
                      href='https://sentra.vercel.app/' target='_blank' rel='noreferrer'>Sentra</a>
                  </div>
                </div>
              </div>
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
                      Bizza is a company has limited liability
                      as members perform or fail to discharge their duty according to the publicly declared incorporation,
                      or published policy.
                    </p>
                  </div>
                  <div>
                    <a className='btn--med btn--theme dynamicBgClr'
                      href='https://service-company-five.vercel.app/' target='_blank' rel='noreferrer'>Bizza</a>
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
                      Bldr is a company or enterprise was created to construct various buildings,
                      properties, housing, roads
                      and other construction projects.
                    </p>
                  </div>
                  <div>
                    <a className='btn--med btn--theme dynamicBgClr'
                      href='https://bldr-pearl.vercel.app/' target='_blank' rel='noreferrer'>Bldr</a>
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
                      href='https://dabiz.vercel.app/' target='_blank' rel='noreferrer'>Dabiz</a>
                  </div>
                </div>
              </div>
            </div>



            <div className="jekt">
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
                      community of their favorite music channels and
                      can be part of
                      the conversation.
                    </p>
                  </div>
                  <div>
                    <a className='btn--med btn--theme dynamicBgClr'
                      href='https://roxy-phi.vercel.app/' target='_blank' rel='noreferrer'>Roxy</a>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="projects__row">
                <div className="projects__row-img-cont">
                  <a href="https://commerce-shop-react.vercel.app/"><img
                    src="images/portfolio/13.png"
                    alt="Software Screenshot"
                    className="projects__row-img"
                    loading="lazy"
                  /></a>
                </div>
                <div className="projects__row-content">
                  <div>
                    <p className="projects__row-content-desc">
                      Services focus on our clients
                      most critical issues and opportunities: strategy, marketing, organization, operations and digital &
                      advanced analytics.
                    </p>
                  </div>
                  <div>
                    <a className='btn--med btn--theme dynamicBgClr'
                      href='https://commerce-shop-react.vercel.app/' target='_blank' rel="noreferrer">Consulting-Company</a>
                  </div>
                </div>
              </div>
            </div>



            <div className="jekt">
              <div data-aos="fade-up" className="projects__row">
                <div className="projects__row-img-cont">
                  <a href="https://portfolio-theme-react.vercel.app/"><img
                    src="images/portfolio/11.png"
                    alt="Software Screenshot"
                    className="projects__row-img"
                    loading="lazy"
                  /></a>
                </div>
                <div className="projects__row-content">
                  <div>
                    <p className="projects__row-content-desc">
                      A portfolio showcase of your talents.
                      a collection of drawings, documents, etc. that represent a person's, especially an artist's work
                    </p>
                  </div>
                  <div>
                    <a className='btn--med btn--theme dynamicBgClr'
                      href='https://portfolio-theme-react.vercel.app/' target='_blank' rel="noreferrer">React-Portfolio</a>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="projects__row">
                <div className="projects__row-img-cont">
                  <a href="https://commerce-shop-react.vercel.app/"><img
                    src="images/portfolio/12.png"
                    alt="Software Screenshot"
                    className="projects__row-img"
                    loading="lazy"
                  /></a>
                </div>
                <div className="projects__row-content">
                  <div>
                    <p className="projects__row-content-desc">
                      E-Commerce is a online shop and company.
                      I created their website from scratch using the
                      react tools I know Integration with Social Media.
                    </p>
                  </div>
                  <div>
                    <a className='btn--med btn--theme dynamicBgClr'
                      href='https://commerce-shop-react.vercel.app/' target='_blank' rel="noreferrer">React-Commerce Shop</a>
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
                      href='https://e-commerce-beryl-sigma.vercel.app/' target='_blank' rel="noreferrer">E-Commerce</a>
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
                      Kudzoka is a standalone web page, created specifically for a marketing or advertising campaign.
                      It’s where a visitor lands after they click on a link.
                    </p>
                  </div>
                  <div>
                    <a className='btn--med btn--theme dynamicBgClr'
                      href='https://kudzoka-chi.vercel.app/' target='_blank' rel="noreferrer">Kudzoka</a>
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