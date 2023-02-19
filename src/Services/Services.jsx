import React, { useEffect } from 'react'
import "./Services.css"
import Aos from "aos";
import "aos/dist/aos.css";


const Home = () => {
  useEffect(() =>{
    Aos.init({duration: 1000});
  }, []);
  return (
        <div>
        <div className="us">
      <div id="service" className="paddsection">
        <div className="container">
          <div className="row justify-content-between">

            <div className="col-lg-4">
              <div className="div-img-bg">
                <div className="about-img">
                  <img data-aos="zoom-out" src="images/Me.jpeg" className="img-responsive" alt="me"/>
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

      


{/* 
<div id="services">
  <div className="container">

    <div className="services-carousel owl-theme">

      <div className="services-block">

        <i className="ion-ios-browsers-outline"></i>
        <span>UI/UX DESIGN</span>
        <p className="separator">There are many variations of passages of
          Lorem Ipsum available</p>

      </div>

      <div className="services-block">

        <i className="ion-ios-lightbulb-outline"></i>
        <span>BRAND IDENTITY</span>
        <p className="separator">To an English person, it will seem like
          simplified English,told me what </p>

      </div>

      <div className="services-block">

        <i className="ion-ios-color-wand-outline"></i>
        <span>WEB DESIGN</span>
        <p className="separator">There are many variations of passages of
          Lorem Ipsum available</p>

      </div>

      <div className="services-block">

        <i className="ion-social-android-outline"></i>
        <span>MOBILE APPS</span>
        <p className="separator">To an English person, it will seem like
          simplified English,told me what </p>

      </div>

      <div className="services-block">

        <i className="ion-ios-analytics-outline"></i>
        <span>Analytics</span>
        <p className="separator">There are many variations of passages of
          Lorem Ipsum available</p>

      </div>

    </div>

  </div>

</div> */}

</div>
  )
}

export default Home