import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import '../Model.css';
import Modal from '../Model';
import New from '../New'

const Contact = () => {

  const [openModal, setOpenModal] = useState(false);
  const sendButton = document.getElementById("submit");
  const popup = document.getElementsByClassName("overlay");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zyb2j8j', 'template_nto4336', form.current, 'ZunpmtOBSBK2cN6eA')
      .then((result) => {
        console.log(result.text);
        console.log("massage sent");
      }, (error) => {
        console.log(error.text);
      });
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);


  return (


    <div id="contact" className="ppaddsection">

<New /> 

      <div className="container">
        <div className="contact-block1">
          <div className="row">

            <div className="col-lg-12">
              <div className="main-container">
                <h2 className="heading heading-sec
                      heading-sec__mb-med">
                  <span className="heading-sec__mainn
                        heading-sec__mainn--lt">Contact</span>
                  <span className="heading-sec__sub
                        heading-sec__sub--lt">
                    Feel free to Contact me by submitting the
                    form below and
                    I will get
                    back to you as soon as possible
                  </span>
                </h2>
                <div data-aos="fade-in" className="contact__form-container">
                  <form ref={form} onSubmit={sendEmail} id="form" name="form" className='contact__form'>
                    <div className="contact__form-field">
                      <label className="contact__form-label"
                        for="name">Name</label>
                      <input
                        placeholder="Enter Your Name"
                        type="text"
                        className="contact__form-input"
                        name="name"
                        id="name" />
                    </div>
                    <div className="contact__form-field">
                      <label className="contact__form-label"
                        for="email">Email</label>
                      <input
                        placeholder="Enter Your Email"
                        type="email"
                        className="contact__form-input"
                        name="email"
                        id="email" />
                    </div>
                    <div className="contact__form-field">
                      <label className="contact__form-label"
                        for="message">Message</label>
                      <textarea
                        required
                        cols="30"
                        rows="5"
                        className="contact__form-input"
                        placeholder="Enter Your Message"
                        name="message"
                        id="message"></textarea>
                    </div>


                    <div className="col-lg-12">



            <button id="submit" className="botn" onClick={() => setOpenModal(true)}>
                Send message
            </button>
            <Modal open={openModal} onClose={() => setOpenModal(false)} />





                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Contact;