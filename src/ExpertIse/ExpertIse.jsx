import React, { useEffect } from 'react'
import "./ExpertIse.css"
import Aos from "aos";
import "aos/dist/aos.css";

const ExpertIse = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id='expertse'>

      <div>
        <div data-aos="zoom-in" className='circle'></div>
        <h2 className="elementor-heading-title">My ExpertIse</h2>
      </div>

      <div class="card-deck row row-cols-1 row-cols-md-2 g-4">
        <div data-aos="fade-down-right" class="col">
          <div id='lol1' class="card">
            <img src="images/3.png" className="card-img-top" alt='' />
            <div class="card-body">
              <h5 className="card-title">Software <br /> Development</h5>
              <div className='bref'>
                <p className="card-text">Experienced in both functional and API , OOP: JavaScript, TypeScript using them in coding projects.</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-down-left" class="col">
          <div id='lol2' class="card">
            <img src="images/4.png" className="card-img-top" alt='' />
            <div class="card-body">
              <h5 className="card-title">Frontend Dev <br /> Reactjs</h5>
              <div className='bref'>
                <p className="card-text">Passionate about UI/UX. Over 2 years of development experience in HTML, CSS, JS, React framework.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpertIse