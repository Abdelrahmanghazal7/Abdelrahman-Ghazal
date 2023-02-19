import React, {useState, useEffect, useRef} from 'react'
import portrait from './Me.jpeg'
import './Gg.css'

export default function Gg() {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }
      setOpen(false);
    };

    document.addEventListener("mousedown", handler);

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

    });

  return (
    <div className='menu-container' ref={menuRef}>
      <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
        <img src={portrait}></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
          <h3>Ghazal <span>Front-End Developer</span></h3>
          <ul>
            <a href='/'><DropdownItem text = {"Home"}/></a>
            <a href='#contact'><DropdownItem text = {"Contact"}/></a>
          </ul>
        </div>
      </div>
  );
}


function DropdownItem(props){
  return(
    <li className='dropdownItem'>
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}