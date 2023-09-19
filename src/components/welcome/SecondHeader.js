import jellyfish from '../../assets/jellyfish.svg';

function SecondHeader() {
  return (
    <div className="welcome">
      <div className="welcome__content">
        <div className="welcome__header welcome__text-zoom-in">
          <span>let's drive</span>
        </div>
        <img src={jellyfish} className="welcome__jelly welcome__jelly--left" alt="jelly"/>
      </div>
    </div>
  );
}

export default SecondHeader;
