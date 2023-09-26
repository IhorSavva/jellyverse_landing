import React, {useState, useEffect, useRef} from 'react';
import armor_decoration from "../../assets/armor_decoration.svg";

function FinanceTitle({appRef}) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const headerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

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
    const moveRandomly = () => {
      const randomX = (Math.random() - 0.5) * 50;
      const randomY = (Math.random() - 0.5) * 50;
      setPosition({ x: randomX, y: randomY });
    }

    const intervalId = setInterval(moveRandomly, 1000);

    if (appRef.current) {
      appRef.current.addEventListener('scroll', checkVisibility);
    }

    return () => {
      clearInterval(intervalId);

      if (appRef.current) {
        appRef.current.addEventListener('scroll', checkVisibility);
      }
    }
  }, []);
  return (
    <div className="features-title">
      <div className="features-title__content">
        <div className="features-title__wrapper app__wrapper">
          <div
            ref={headerRef}
            className={`features-title__phrase ${isVisible ? 'welcome__header-visible' : 'welcome__header-hidden'}`}
          >
            <span>of financial</span>
            <br/>
            <span>opportunities</span>
          </div>

          <div className="features-title__img-armor-wrapper">
            <img
              src={armor_decoration}
              className="move-object graffiti__armor-img"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinanceTitle;
