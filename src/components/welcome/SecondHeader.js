import React, { useRef, useState, useEffect } from 'react';


function SecondHeader({appRef}) {
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
    <div className="welcome">
      <div
        className="welcome__content"
      >
        <div
          ref={headerRef}
          className={`welcome__header ${isVisible ? 'welcome__header-visible' : 'welcome__header-hidden'}`}
        >
          <span>let's drive</span>
        </div>
      </div>
    </div>
  );
}

export default SecondHeader;
