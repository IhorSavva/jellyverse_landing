import textLogo from "../../assets/text_logo.svg";
import shell_decoration from "../../assets/shell_decoration.svg";
import React, { useState, useEffect } from 'react';

function FeaturesTitle() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveRandomly = () => {
      const randomX = (Math.random() - 0.5) * 50;
      const randomY = (Math.random() - 0.5) * 50;
      setPosition({ x: randomX, y: randomY });
    }

    const intervalId = setInterval(moveRandomly, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);
  return (
    <div className="features-title">
      <div className="features-title__content">
        <div className="features-title__wrapper features-title--padding app__wrapper">
          <div className="features-title__description">
            <img
              src={textLogo}
              className="features-title__description-logo"
              alt="logo"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            is a revolutionary financial platform that merges the power of decentralized finance with real-world assets.
            It provides a seamless and user-friendly experience for exploring and investing in a diverse range of
            digital and tangible assets.
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
