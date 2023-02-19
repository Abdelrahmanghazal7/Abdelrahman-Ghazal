import { useEffect, useState } from "react";
import useScrollListener from "../Scroll";
import "./Navbar.css";

export default function App() {
  const [navclassNameNameList, setNavclassNameNameList] = useState([]);
  const scroll = useScrollListener();

  // update classNameNameList of nav on scroll
  useEffect(() => {
    const _classNameNameList = [];

    if (scroll.y < 600 && scroll.y - scroll.lastY < 600)
      _classNameNameList.push("nav-bar--hidden");

    setNavclassNameNameList(_classNameNameList);
  }, [scroll.y, scroll.lastY]);

  return (

    <nav className={navclassNameNameList.join(" ")}>

      <div className="navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">


          <div>
            <img className='image' src="images/logo.png" alt="logo" />
          </div>


          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#service">Service</a>
              </li>


              <li className="nav-item">
                <a className="nav-link" href="#portfolio">Portfolio</a>
              </li>



              <li className="nav-item">
                <a className="nav-link" href="#skills">My Skills</a>
              </li>


              <li className="nav-item">
                <a className="nav-link" href="#aboutme">About Me</a>
              </li>


              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </nav>

  );
}