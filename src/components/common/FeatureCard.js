import JellyverseCard from "./JellyverseCard";
import JellybondCard from "./JellybondCard";
import JellyswapCard from "./JellyswapCard";
import JusdCard from "./JusdCard";
import JellystakeCard from "./JellystakeCard";
import MoreCard from "./MoreCard";
import {useRef} from "react";

function FeatureCard(props) {
  const boxRef = useRef(null);

  const handleMouseMove = (e) => {
    const box = boxRef.current;
    if (!box) return;

    const rect = box.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const offsetX = rect.left + width / 2;
    const offsetY = rect.top + height / 2;

    const deltaX = (e.clientX - offsetX) / width;
    const deltaY = (e.clientY - offsetY) / height;

    const rotateY = (20 * deltaX) * 2;
    const rotateX = (-20 * deltaY) * 2;

    box.style.transform = `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(${-rotateX}deg) rotateY(${-rotateY}deg) rotateZ(0deg) skew(0deg, 0deg)`;
  }
  const handleMouseOut = () => {
    const box = boxRef.current;
    if (box) {
      box.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
    }
  }

  const handleClick = () => {
    const box = boxRef.current;
    if (box) {
      box.style.transition = 'transform 0.5s';
      box.style.transform = 'rotateY(180deg)';
    }
  }
  return (
    <div className="feature-card__wrapper">
      <div
        ref={boxRef}
        style={{
          transition: 'transform 0.1s ease',
          willChange: 'transform',
          transformStyle: 'preserve-3d',
          transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
        }}
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
        className="feature-card__card"
      >
        <div className="feature-card__content">
          <div className="feature-card__content-front">
            {props.type === 'jellyverse' && <JellyverseCard/>}
            {props.type === 'jellyswap' && <JellyswapCard/>}
            {props.type === 'jellystake' && <JellystakeCard/>}
            {props.type === 'jellybond' && <JellybondCard/>}
            {props.type === 'jusd' && <JusdCard/>}
            {props.type === 'more' && <MoreCard/>}
          </div>
          <div className="feature-card__content-back">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi aspernatur culpa explicabo iste libero minus neque non, quis ratione similique voluptas voluptate? Dolor iste laudantium nisi quas veritatis voluptatibus!
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;