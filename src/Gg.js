import portrait from './Me.jpeg'
import { Link } from "react-router-dom";
import './Gg.css'

function Gg() {
  return (

    <div className="dropdown-center">
      <div className="menu-trigger btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <img src={portrait}></img>
      </div>

      <ul className="dropdown-menu">
        <h3>Ghazal <span>Front-End Developer</span></h3>
        <li><Link className='dropdown-item' to="/">Home</Link></li>
        <li><a id='hh' className="dropdown-item" href="#contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default Gg;