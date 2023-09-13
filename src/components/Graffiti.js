import graffiti from '../assets/graffity.svg';
import textLogo from '../assets/text_logo.svg';
import img from '../assets/img.png';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import graffitiLogo from '../assets/graffiti_logo.svg'
import FeatureCard from "./common/FeatureCard";

function Graffiti() {
  return (
    <div className="graffiti">
      <div className="graffiti__image app__wrapper">
        <img
          src={graffiti}
          className="graffiti__image-img"
          alt="graffiti"
        />
      </div>
      <div className="graffiti__start-side"/>
      <div className="graffiti__content">
        <div className="graffiti__wrapper app__wrapper">
          <div className="graffiti__description">
            <img
              src={textLogo}
              className="graffiti__description-logo"
              alt="logo"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            is a revolutionary financial platform that merges the power of decentralized finance with real-world assets.
            It provides a seamless and user-friendly experience for exploring and investing in a diverse range of
            digital and tangible assets.
          </div>

          <div
            className="graffiti__img-first-wrapper"
          >
            <img
              src={img}
              className="graffiti__description-img"
              alt="img"
            />
          </div>

          <div
            className="graffiti__img-second-wrapper"
          >
            <img
              src={img1}
              className="graffiti__description-img-second"
              alt="img"
            />
          </div>

          <div
            className="graffiti__img-third-wrapper"
          >
            <img
              src={img2}
              className="graffiti__description-img-third"
              alt="img"
            />
          </div>

          <div className="graffiti__phrase">
            <span>explore</span> <br/> <span>a see</span>
          </div>

          <div className="graffiti__phrase-second">
            <span>of financial<br/> opportunities</span>
          </div>

          <div className="graffiti__phrase-third">
            <span>with</span>

            <div className="graffiti__logo">
              <img src={graffitiLogo} className="graffiti__logo-icon" alt="img"/>
            </div>
          </div>

          <div className="graffiti__features-wrapper">
            <div className="graffiti__features-title">
              Featuring
            </div>

            <div className="graffiti__features">
              <FeatureCard type="jellyverse"/>
              <FeatureCard type="jellyswap"/>
              <FeatureCard type="jellystake"/>
              <FeatureCard type="jellybond"/>
              <FeatureCard type="jusd"/>
              <FeatureCard type="more"/>
            </div>
          </div>

          <div className="graffiti__end-phrase">
            <span>get ready</span><br/>
            <span>for the defi</span><br/>
            <span>revolution</span><br/>
          </div>
        </div>
      </div>
      <div className="graffiti__end-side"/>
    </div>
  );
}

export default Graffiti;
