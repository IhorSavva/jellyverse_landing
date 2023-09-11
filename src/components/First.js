import jelly from '../assets/jelly.png';
import IconLink from "./common/IconLink";

function First() {
  return (
    <div className="app-first">
      <div className="app-first__links">
        <IconLink icon="telegram" />
        <IconLink icon="telegram" isVolume/>
        <IconLink icon="discord" />
        <IconLink icon="x" />
        <IconLink icon="facebook" />
        <IconLink icon="linkedin" />
        <IconLink icon="reddit" />
      </div>
      <div className="app-first__header">
        welcome
        <br/>
        to defi 3.0
      </div>
      <img src={jelly} className="app-first__jelly" alt="jelly"/>
    </div>
  );
}

export default First;
