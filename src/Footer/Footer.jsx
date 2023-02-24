import React, { useEffect } from 'react'
import "./Footer.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="details col-lg-6">
            <h2 className="mb-30">GET IN TOUCH</h2>
            <div className="inner">
              <div className="left">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="right">abdelrahmanghazal7@gmail.com</div>
            </div>

            <div className="inner">
              <div className="left">
                <i className="fa fa-map-marker"></i>
              </div>
              <div className="right">Egypt - Alexandria</div>
            </div>

            <div className="inner">
              <div className="left">
                <i className="fa fa-phone-square"></i>
              </div>
              <div className="right">+02 01062562557</div>
            </div>
          </div>

          <div className="conect col-lg-6">
            <img className='splash' src="images/Pngtree.png" alt="" />
            <h2 className="social">Social</h2>
            <div className="icons">
              <span>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </span>
              <span>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </span>
              <span>
                <a href="#">
                  <i className="fa fa-whatsapp"></i>
                </a>
              </span>
              <span>
                <a href="#">
                  <i className="fa fa-github"></i>
                </a>
              </span>
              <span>
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="right col-lg-12">
            <div id="hr"></div>

        
            <p>&copy;<span className='credit'>Abdelrahman Ghazal</span> - 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
