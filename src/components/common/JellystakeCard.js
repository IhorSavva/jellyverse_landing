import jellystake from '../../assets/jellystake.svg';
function JellystakeCard() {

  return (
    <div className="feature-card">
      <div className="feature-card__header">
        <img src={jellystake} className="feature-card__icon" alt="icon"/>
        <span className="feature-card__title">Jellystake</span>
      </div>

      <div className="feature-card__description">
        /stake JLY and govern jellyverse
      </div>
    </div>
  );
}

export default JellystakeCard;
