import { useEffect, useState } from "react";
import "./GoTop.css";

const GoTop = () => {
  // The back-to-top button is hidden at the beginning
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

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <div className="top">

      {showButton && (

        <a href="#" onClick={scrollToTop} className="return-to-top"><i className="fa
            fa-long-arrow-up"></i></a>


      )}
    </div>
  );
};

export default GoTop;