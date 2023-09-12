import graffiti from "../assets/graffiti_2.svg";
import arrow from "../assets/arrow_right.svg";

function BurnEvent() {
  return (
    <div className="burn-event">
      <div className="app__wrapper">
        <img src={graffiti} className="burn-event__graffiti" alt="graffiti"/>
      </div>

      <div className="burn-event__event-wrapper">
        <div className="burn-event__event app__wrapper">
          <img src={arrow} className="burn-event__arrow-icon" alt="arrow"/>
          <span className="burn-event__title">join the burn event now</span>
        </div>
      </div>
    </div>
  );
}

export default BurnEvent;
