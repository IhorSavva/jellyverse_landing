import graffitiLogo from "../../assets/graffiti_logo.svg";

function JellyTitle() {
  return (
    <div className="features-title__jelly">
      <div className="features-title__content">
        <div className="features-title__wrapper features-title__wrapper--jelly app__wrapper">
          <div className="features-title__phrase--jelly">
            <span>with</span>

            <div className="features-title__logo">
              <img src={graffitiLogo} className="features-title__logo-icon" alt="img"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JellyTitle;
