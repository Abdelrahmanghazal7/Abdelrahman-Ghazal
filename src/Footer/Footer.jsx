import React, { useEffect, useState } from 'react'
import "./Footer.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {

  // Download button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

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
                <a target="_blank" href="https://www.facebook.com/abdelrahmanghazal77y?mibextid=ZbWKwL">
                  <i className="fa fa-facebook"></i>
                </a>
              </span>
              <span>
                <a target="_blank" href="https://instagram.com/abdelrahmanghazal_7?igshid=NTE5MzUyOTU=">
                  <i className="fa fa-instagram"></i>
                </a>
              </span>
              <span>
                <a target="_blank" href="https://wa.me/qr/32ZJYFUAYSO4G1">
                  <i className="fa fa-whatsapp"></i>
                </a>
              </span>
              <span>
                <a target="_blank" href="https://github.com/Abdelrahmanghazal7">
                  <i className="fa fa-github"></i>
                </a>
              </span>
              <span>
                <a target="_blank" href="https://www.linkedin.com/in/abdelrahman-ghazal-b046781ba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bu4h2%2BCJcRM6195%2FqfBRa4Q%3D%3D">
                  <i className="fa fa-linkedin"></i>
                </a>
              </span>
              <span>

                {showButton && (
                  <a href="CV.pdf" download title='Download CV' className="download-btn"><i className="fa-solid fa-download"></i></a>
                )}

              </span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="right col-lg-12">
            <div id="hr"></div>
            <p className='final'>&copy;<span className='credit'>Abdelrahman Ghazal</span> - 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
