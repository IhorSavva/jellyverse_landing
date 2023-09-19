import React, { useState, useEffect } from 'react';
import stone_decoration from "../../assets/stone_decoration.svg";

function ExploreTitle() {
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
            <span>explore</span>
            <br/>
            <span>a see</span>
          </div>

          <div className="features-title__img-stone-wrapper">
            <img
              src={stone_decoration}
              className="move-object graffiti__stone-img"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreTitle;
