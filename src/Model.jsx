import React from 'react';
import './Model.css';

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={() => {}} className='overlay'>
          <div className='contnt'>
            <img className='check' src="images/done.jpeg" alt='' />
            <h1>Thanks!</h1>
            <p>Your message has been successfully sent.</p>
          </div>
          <div className='btnContainer'>
            <button onClick={onClose} className='btnPrimary'>
              <span className='bold'>OK</span>
            </button>
          </div>
        </div>
  );
};

export default Modal;