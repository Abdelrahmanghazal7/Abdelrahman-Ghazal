import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.css";
import { IoIosBrowsers } from "react-icons/io";
import { BsFillCpuFill } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa";
import { IoAnalyticsOutline } from "react-icons/io5";
import { BsAppIndicator } from "react-icons/bs";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div id="services">
        <Slider {...settings}>


          <div className="services-block">
            <div className="i"><IoIosBrowsers /></div>
            <span>UI/UX DESIGN</span>
            <p className="separator">There are many variations of passages of
              Lorem Ipsum available</p>
          </div>



          <div className="services-block">
            <div className="i"><FaLightbulb /></div>
            <span>BRAND IDENTITY</span>
            <p className="separator">To an English person, it will seem like
              simplified English,told me what </p>
          </div>



          <div className="services-block">
            <div className="i"><BsFillCpuFill /></div>
            <span>WEB DESIGN</span>
            <p className="separator">There are many variations of passages of
              Lorem Ipsum available</p>
          </div>


          <div className="services-block">
            <div className="i"><IoAnalyticsOutline /></div>
            <span>Analytics</span>
            <p className="separator">There are many variations of passages of
              Lorem Ipsum available</p>
          </div>


          <div className="services-block">
            <div className="i"><BsAppIndicator /></div>
            <span>WEB APPS</span>
            <p className="separator">To an English person, it will seem like
              simplified English,told me what </p>
          </div>




        </Slider>
      </div>
    );
  }
}