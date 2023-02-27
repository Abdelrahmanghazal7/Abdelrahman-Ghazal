import React, { useState, useEffect, useRef } from "react";
import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_53oxnbt', 'template_8kj5o4h', form.current, 'E833h3CwzPYncx8jV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    const [formvalue, setFormvalue] = useState({ name: '', email: '', message: '' });
    const [formerror, setFormerror] = useState({});
    const [issubmit, setSubmit] = useState(false);

    const handlevalidation = (e) => {
        const { name, value } = e.target;
        setFormvalue({ ...formvalue, [name]: value });
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        setFormerror(validationform(formvalue));
        setSubmit(true);
    }
    const validationform = (value) => {
        const errors = {};
        const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!value.name) {
            errors.name = "Please Enter Name";
        }

        if (!value.email) {
            errors.email = "Please Enter Email";
        } else if (!emailPattern.test(value.email)) {
            errors.email = "Enter Valid Email";
        }
        if (!value.message) {
            errors.message = "Please Enter Message";
        } else {

            toast.success('Your message successfully sent', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "dark",
            });

        }

        return errors;
    }

    useEffect(() => {
        if (Object.keys(formerror).length === 0 && issubmit) {
            console.log(formvalue);
        }
    }, [formerror, formvalue, issubmit]);



    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (



        <div id="contact" className="ppaddsection">


            <div className="container">
                <div className="contact-block1">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="main-container">
                                <h2 className="heading heading-sec
                      heading-sec__mb-med">
                                    <span className="heading-sec__main
                        heading-sec__main--lt"><h1>Contact</h1></span>
                                    <span id='i_t' className="heading-sec__sub
                        heading-sec__sub--lt">
                                        Feel free to Contact me by submitting the
                                        form below and
                                        I will get
                                        back to you as soon as possible
                                    </span>
                                </h2>
                                <div onSubmit={handlesubmit} data-aos="fade-in" className="contact__form-container">

                                    <form ref={form} onSubmit={sendEmail} id="form" name="form" className='contact__form'>


                                        <div className="contact__form-field">
                                            <label className="contact__form-label">Name</label>
                                            <input type="text" placeholder="Enter Your Name" className="contact__form-input" name="name" value={formvalue.name} onChange={handlevalidation} />
                                            <span id="text">{formerror.name} </span>
                                        </div>

                                        <div className="contact__form-field">
                                            <label className="contact__form-label">Email</label>
                                            <input type="email" placeholder="Enter Your Email" className="contact__form-input" name="email" value={formvalue.email} onChange={handlevalidation} />
                                            <span id="text">{formerror.email} </span>
                                        </div>

                                        <div className="contact__form-field">
                                            <label className="contact__form-label">Message</label>
                                            <textarea cols="30" rows="5" className="contact__form-input" name="message" value={formvalue.message} onChange={handlevalidation} />
                                            <span id="text">{formerror.message} </span>
                                        </div>


                                        <div>
                                            <button type='submit' className="botn" name="submit">Send message</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;