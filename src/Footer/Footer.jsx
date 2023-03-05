import React, { useEffect, useState } from 'react'
import "./Footer.css";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {

  document.querySelectorAll('.button').forEach(button => {
    let duration = 3000,
      svg = button.querySelector('svg'),
      svgPath = new Proxy({
        y: null,
        smoothing: null
      }, {
        set(target, key, value) {
          target[key] = value;
          if (target.y !== null && target.smoothing !== null) {
            svg.innerHTML = getPath(target.y, target.smoothing, null);
          }
          return true;
        },
        get(target, key) {
          return target[key];
        }
      });

    button.style.setProperty('--duration', duration);
    svgPath.y = 20;
    svgPath.smoothing = 0;
    button.addEventListener('click', e => {
      e.preventDefault();

      if (!button.classList.contains('loading')) {
        button.classList.add('loading');
        setTimeout(() => {
          svg.innerHTML = getPath(0, 0, [
            [3, 14],
            [8, 19],
            [21, 6]
          ]);
        }, duration / 2);
      }
    });
  });

  function getPoint(point, i, a, smoothing) {
    let cp = (current, previous, next, reverse) => {
      let p = previous || current,
        n = next || current,
        o = {
          length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
          angle: Math.atan2(n[1] - p[1], n[0] - p[0])
        },
        angle = o.angle + (reverse ? Math.PI : 0),
        length = o.length * smoothing;
      return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
    },
      cps = cp(a[i - 1], a[i - 2], point, false),
      cpe = cp(point, a[i - 1], a[i + 1], true);
    return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
  }

  function getPath(update, smoothing, pointsNew) {
    let points = pointsNew ? pointsNew : [
      [4, 12],
      [12, update],
      [20, 12]
    ],
      d = points.reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`, '');
    return `<path d="${d}" />`;
  }

  // Download button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="details col-lg-6">
            <h2 className="mb-30">GET IN TOUCH</h2>
            <div className="inner">
              <div className="left">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="right">abdelrahmanghazal7@gmail.com</div>
            </div>

            <div className="inner">
              <div className="left">
                <i className="fa fa-map-marker"></i>
              </div>
              <div className="right">Egypt - Alexandria</div>
            </div>

            <div className="inner">
              <div className="left">
                <i className="fa fa-phone-square"></i>
              </div>
              <div className="right">+02 01062562557</div>
            </div>
          </div>

          <div className="conect col-lg-6">
            <img className='splash' src="images/Pngtree.png" alt="" />
            <h2 className="social">Social</h2>
            <div className="icons">
              <span>
                <a target="_blank" href="https://www.facebook.com/abdelrahmanghazal77y?mibextid=ZbWKwL">
                  <i className="fa fa-facebook"></i>
                </a>
              </span>
              <span>
                <a target="_blank" href="https://instagram.com/abdelrahmanghazal_7?igshid=NTE5MzUyOTU=">
                  <i className="fa fa-instagram"></i>
                </a>
              </span>
              <span>
                <a target="_blank" href="https://wa.me/qr/32ZJYFUAYSO4G1">
                  <i className="fa fa-whatsapp"></i>
                </a>
              </span>
              <span>
                <a target="_blank" href="https://github.com/Abdelrahmanghazal7">
                  <i className="fa fa-github"></i>
                </a>
              </span>
              <span>
                <a target="_blank" href="https://www.linkedin.com/in/abdelrahman-ghazal-b046781ba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bu4h2%2BCJcRM6195%2FqfBRa4Q%3D%3D">
                  <i className="fa fa-linkedin"></i>
                </a>
              </span>
              <span>

                {showButton && (
                  <a href="" download title='Download CV' className="download-btn button dark-single">
                    <div>
                      <svg viewBox="0 0 24 24"></svg>
                    </div>
                  </a>
                )}

                {/* dribbble  */}
                <a className="dribbble" href="https://dribbble.com/shots/7299868-Download-Buttons" target="_blank">
                  <img src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg" alt="" />
                  </a>

              </span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="right col-lg-12">
            <div id="hr"></div>
            <p className='final'>&copy;<span className='credit'>Abdelrahman Ghazal</span> - 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
