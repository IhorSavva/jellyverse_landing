import textLogo from "../../assets/text_logo.svg";
import shell_decoration from "../../assets/shell_decoration.svg";
import React, {useState, useEffect, useRef} from 'react';

function FeaturesTitle({appRef}) {
  const headerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const description = "is a revolutionary financial platform that merges the power of decentralized finance with real-world assets. It provides a seamless and user-friendly experience for exploring and investing in a diverse range of digital and tangible assets.";

  function animatedText(text) {
    return text.split(' ').map((word, index) => (
      <span
        key={index}
        className={isVisible ? "word-animation" : ""}
        style={{ animationDelay: `${index * 0.05}s` }}
      >
            {word}
        &nbsp; {}
        </span>
    ));
  }

  const checkVisibility = () => {
    if (headerRef.current && appRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      const appRect = appRef.current.getBoundingClientRect();
      const isElementVisible = (rect.top >= appRect.top) && (rect.bottom <= appRect.bottom);
      if (isElementVisible && !isVisible) {
        window.requestAnimationFrame(() => {
          setIsVisible(true);
        });
      }
    }
  };

  useEffect(() => {
    if (appRef.current) {
      appRef.current.addEventListener('scroll', checkVisibility);
    }

    return () => {
      if (appRef.current) {
        appRef.current.removeEventListener('scroll', checkVisibility);
      }
    }
  }, [isVisible]);

  return (
    <div className="features-title">
      <div className="features-title__content">
        <div
          className="features-title__wrapper features-title--padding app__wrapper"
        >
          <div
            className="features-title__description"
          >
            <div className="features-title__description-img">
              <img
                  ref={headerRef}
                  alt="logo"
                  src={textLogo}
                  className={`features-title__description-logo`}
              />
            </div>
            &nbsp;
            {animatedText(description)}
          </div>

          <div className="features-title__img-shell-wrapper">
            <img
              src={shell_decoration}
              className="move-object features-title__shell-img"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesTitle;
