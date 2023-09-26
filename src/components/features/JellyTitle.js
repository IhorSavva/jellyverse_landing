import graffitiLogo from "../../assets/graffiti_logo.svg";
import {useEffect, useRef, useState} from "react";

function JellyTitle({appRef}) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const headerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const checkVisibility = () => {
    if (!hasAnimated && headerRef.current && appRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      const appRect = appRef.current.getBoundingClientRect();
      const isElementVisible = (rect.top >= appRect.top) && (rect.bottom <= appRect.bottom);
      if (isElementVisible) {
        setIsVisible(true);
        setHasAnimated(true);
      }
    }
  };

  useEffect(() => {
    if (appRef.current) {
      appRef.current.addEventListener('scroll', checkVisibility);
      return () => {
        appRef.current.removeEventListener('scroll', checkVisibility);
      };
    }
  }, []);

  return (
    <div className="features-title__jelly">
      <div className="features-title__content">
        <div className="features-title__wrapper features-title__wrapper--jelly app__wrapper">
          <div
            ref={headerRef}
            className={`features-title__phrase--jelly ${isVisible ? 'welcome__header-visible' : 'welcome__header-hidden'}`}
          >
            <span>with</span>

            <div className="features-title__logo">
              <img src={graffitiLogo} className="features-title__logo-icon" alt="img"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JellyTitle;
