import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import './Header.css'
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const [state] = useState({
    title: "Hi,",
    titleTwo: "I'm",
    titleThree: "Code&Coding",
    image: "",
  });

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <header style={{ backgroundImage: "url(images/home-bg.jpeg)" }}>
      <div className="container">
        <div className="header-content">
          <div className='content'>
            <div data-aos="fade-down-right" className='me'>
              <h1 className='mee'>I'm</h1> <h1><Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    "Abdelrahman Ghazal.",
                    "a Developer.",
                    "a Designer.",
                    "a Freelancer.",
                  ],
                }}
              />
              </h1>
            </div>
            <p data-aos="fade-down-right">developer, designer, engineer</p>
          </div>
          <ul data-aos="slide-left" className="list-unstyled list-social">
            <li><a target="_blank" href="https://www.facebook.com/abdelrahmanghazal77y?mibextid=ZbWKwL"><i className="icon-3d fa-brands fa-facebook-f"></i></a></li>
            <li><a target="_blank" href="https://instagram.com/abdelrahmanghazal_7?igshid=NTE5MzUyOTU="><i id='fa-4x' className="fa fa-instagram fa-4x icon-3d"></i></a></li>
            <li><a target="_blank" href="https://wa.me/qr/32ZJYFUAYSO4G1"><i className="icon-3d fa-brands fa-whatsapp"></i></a></li>
            <li><a target="_blank" href="https://github.com/Abdelrahmanghazal7"><i className="icon-3d fa-brands fa-github"></i></a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/abdelrahman-ghazal-b046781ba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bu4h2%2BCJcRM6195%2FqfBRa4Q%3D%3D"><i className="fa-brands fa-linkedin icon-3d"></i></a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header