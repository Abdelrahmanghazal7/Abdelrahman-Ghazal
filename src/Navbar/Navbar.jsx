import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link } from 'react-scroll'

function useScrollListener() {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
  });

  // set up event listeners
  useEffect(() => {
    const handleScroll = () => {
      setData((last) => {
        return {
          x: window.scrollX,
          y: window.scrollY,
          lastX: last.x,
          lastY: last.y
        };
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return data;
}

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [navclassNameNameList, setNavclassNameNameList] = useState([]);
  const scroll = useScrollListener();

  useEffect(() => {
    const _classNameNameList = [];

    if (scroll.y < 500 && scroll.y - scroll.lastY < 500)
      _classNameNameList.push("nav-bar--hidden");

    setNavclassNameNameList(_classNameNameList);
  }, [scroll.y, scroll.lastY]);

  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <nav className={navclassNameNameList.join(" ")}>
          <div className="navbar">
            <div className="navbar-container container">

              <div>
                <img className='image' src="images/logo.png" alt="logo" />
              </div>


              <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>

                <li className="nav-item">
                  <Link to="about" id="linko" spy={true} smooth={true} duration={200} onClick={closeMobileMenu}>
                  About Me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="expertse" id="linko" spy={true} smooth={true} duration={200} onClick={closeMobileMenu}>
                    Service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="portfolio" id="linko" spy={true} smooth={true} duration={200} onClick={closeMobileMenu}>
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="skills" id="linko" spy={true} smooth={true} offset={-50} duration={200} onClick={closeMobileMenu}>
                    My Skills
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="aboutme" id="linko" spy={true} smooth={true} offset={-300} duration={500} onClick={closeMobileMenu}>
                    About Me
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link to="contact" id="linko" spy={true} smooth={true} offset={100} duration={200} onClick={closeMobileMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;