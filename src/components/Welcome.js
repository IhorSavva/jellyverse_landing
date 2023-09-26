import IconLink from "./common/IconLink";
import Toolbar from "./Toolbar";

function Welcome() {
  return (
    <div className="welcome app__wrapper">
      <Toolbar/>
      <div className="welcome__content">
        <div className="welcome__links">
          <IconLink icon="telegram" />
          <IconLink icon="telegram" isVolume />
          <IconLink icon="discord" />
          <IconLink icon="x" />
          <IconLink icon="facebook" />
          <IconLink icon="linkedin" />
          <IconLink icon="reddit" />
        </div>
        <div className="welcome__header welcome__text-zoom-in">
          <span>welcome</span>
          <br/>
          <span>to defi 3.0</span>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
