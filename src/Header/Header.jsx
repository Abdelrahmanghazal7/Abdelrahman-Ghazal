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

useEffect(() =>{
  Aos.init({duration: 1000});
}, []);
  return (

    <header style={{ backgroundImage: "url(images/home-bg.jpeg)"}}>
      
    

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
            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-square-instagram"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-whatsapp"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-github"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
          </ul>


        </div>
      </div>

    </header>
  )
}

export default Header
