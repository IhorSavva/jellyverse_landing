import graffiti from "../assets/graffiti_2.svg";

function DefiGraffiti() {
  return (
    <div className="defi-graffiti">
      <div className="app__wrapper defi-graffiti__wrapper">
        <img src={graffiti} className="defi-graffiti__graffiti" alt="graffiti"/>
      </div>
    </div>
  );
}

export default DefiGraffiti;
