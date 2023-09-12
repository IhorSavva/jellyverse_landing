import jelly from '../assets/jelly.png';
import IconLink from "./common/IconLink";

function Welcome() {
  return (
    <div className="app-first">
      <div className="app-first__links">
        <IconLink icon="telegram" />
        <IconLink icon="telegram" isVolume />
        <IconLink icon="discord" />
        <IconLink icon="x" />
        <IconLink icon="facebook" />
        <IconLink icon="linkedin" />
        <IconLink icon="reddit" />
      </div>
      <div className="app-first__header animation-sentence">
        <span>welcome <br/>to defi 3.0</span>
        <br/>
        <span>let's dive</span>
        <br/>
        <span>into</span>
        <br/>
        <span>the jellyVerse</span>
      </div>
      <img src={jelly} className="app-first__jelly" alt="jelly"/>
    </div>
  );
}

export default Welcome;
