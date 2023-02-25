import { Link } from "react-router-dom";
import './Dropdown.css'

function Dropdown() {
  return (

    <div className="dropdown-center">
      <div className="menu-trigger btn-secondary" type="button" data-bs-toggle="dropdown">
        <img src="./images/Me.jpeg" alt="me"></img>
      </div>

      <ul className="dropdown-menu">
        <h3>Ghazal <span>Front-End Developer</span></h3>
        <li><Link className='dropdown-item' to="/">Home</Link></li>
        <li><a id='hh' className="dropdown-item" href="#contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default Dropdown;