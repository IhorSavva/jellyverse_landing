import graffiti from "../assets/graffity.svg";

function WelcomeDefiGraffiti() {
  return (
    <div className="welcome__graffiti-wrapper">
      <img
        src={graffiti}
        className="welcome__graffiti-img"
        alt="graffiti"
      />
    </div>
  );
}

export default WelcomeDefiGraffiti;
