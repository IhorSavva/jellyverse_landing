import React, { useState, useEffect } from 'react';
import armor_decoration from "../../assets/armor_decoration.svg";

function FinanceTitle() {
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
        <div className="features-title__wrapper app__wrapper">
          <div className="features-title__phrase">
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
