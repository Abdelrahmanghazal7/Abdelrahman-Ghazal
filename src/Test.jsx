import React, { useState, useEffect } from "react";
import "./Contact/Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import swal from 'sweetalert';

function Contact() {

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
        }else{
            swal("Good job!", "You clicked the button!", "success");
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
                                <div data-aos="fade-in" className="contact__form-container">





                                    <form onSubmit={handlesubmit} id="form" name="form" className='contact__form'>

                                        <div className="contact__form-field">
                                            <label className="contact__form-label">Name</label>
                                            <input type="text" placeholder="Enter Your Name" className="contact__form-input" id="name" name="name" value={formvalue.name} onChange={handlevalidation} />
                                            <span className="text-danger">{formerror.name} </span>
                                        </div>

                                        <div className="contact__form-field">
                                            <label className="contact__form-label">Email</label>
                                            <input type="text" placeholder="Enter Your Email" className="contact__form-input" id="email" name="email" value={formvalue.email} onChange={handlevalidation} />
                                            <span className="text-danger">{formerror.email}  </span>
                                        </div>

                                        <div className="contact__form-field">
                                            <label className="contact__form-label">Message</label>
                                            <textarea cols="30" rows="5" className="contact__form-input" id="message" name="message" value={formvalue.message} onChange={handlevalidation} />
                                            <span className="text-danger">{formerror.message}  </span>
                                        </div>


                                        <div>
                                            <button type='submit' id="submit" className="botn" name="button">Send message</button>

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