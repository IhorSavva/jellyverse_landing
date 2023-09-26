import graffiti from "../assets/graffiti.svg";
import graffiti_smudges from "../assets/graffiti_smudges.svg";
import React, {useRef, useState, useEffect} from 'react';

function WelcomeDefiGraffiti({appRef}) {
  const headerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const checkVisibility = () => {
    if (headerRef.current && appRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      const appRect = appRef.current.getBoundingClientRect();
      const isElementVisible = (rect.top >= appRect.top) && (rect.bottom <= appRect.bottom);
      setIsVisible(isElementVisible);
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
    <div
      ref={headerRef}
      className="welcome__graffiti-wrapper"
    >
      <img
        className="welcome__graffiti-img"
        src={graffiti}
        alt="graffiti"
      />
      <img
        src={graffiti_smudges}
        alt="graffiti_smudges"
        className={`welcome__graffiti-img-smudges ${isVisible ? 'welcome__graffiti-img-smudges--visible' : 'welcome__graffiti-img-smudges--hidden'}`}
      />
    </div>
  );
}

export default WelcomeDefiGraffiti;
