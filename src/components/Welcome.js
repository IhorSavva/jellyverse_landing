import jellyfish from '../assets/jellyfish.svg';
import IconLink from "./common/IconLink";

function Welcome() {
  return (
    <div className="welcome app__wrapper">
      <div className="welcome__links">
        <IconLink icon="telegram" />
        <IconLink icon="telegram" isVolume />
        <IconLink icon="discord" />
        <IconLink icon="x" />
        <IconLink icon="facebook" />
        <IconLink icon="linkedin" />
        <IconLink icon="reddit" />
      </div>
      <div className="welcome__header">
        <span>welcome <br/>to defi 3.0</span>
        <br/>
        <span>let's dive</span>
        <br/>
        <span>into</span>
        <br/>
        <span>the jellyverse</span>
      </div>
      <img src={jellyfish} className="welcome__jelly" alt="jelly"/>
    </div>
  );
}

export default Welcome;
