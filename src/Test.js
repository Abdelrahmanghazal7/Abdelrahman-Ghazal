import React, { useEffect, useState } from "react";
import "./Test.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

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
                  <a id="linko"
                    href="#"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a id="linko"
                    href="#service"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a id="linko"
                    href="#portfolio"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a id="linko"
                    href="#skills"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    My Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a id="linko"
                    href="#aboutme"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a id="linko"
                    href="#Contact"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </a>
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
