import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import './Header.css'
import Aos from "aos";
import "aos/dist/aos.css";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

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
            <li><a className='icxn' target="_blank" href="https://www.facebook.com/abdelrahmanghazal77y?mibextid=ZbWKwL"><GrFacebookOption/></a></li>
            <li><a className='icxn' target="_blank" href="https://instagram.com/abdelrahmanghazal_7?igshid=NTE5MzUyOTU="><AiFillInstagram/></a></li>
            <li><a className='icxn' target="_blank" href="https://wa.me/qr/32ZJYFUAYSO4G1"><RiWhatsappFill/></a></li>
            <li><a className='icxn' target="_blank" href="https://github.com/Abdelrahmanghazal7"><AiFillGithub/></a></li>
            <li><a className='icxn' target="_blank" href="https://www.linkedin.com/in/abdelrahman-ghazal-b046781ba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bu4h2%2BCJcRM6195%2FqfBRa4Q%3D%3D"><AiFillLinkedin/></a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header