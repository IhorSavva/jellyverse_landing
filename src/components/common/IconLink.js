import telegram from '../../assets/icons/telegram.svg';
import discord from '../../assets/icons/discord.svg';
import x from '../../assets/icons/x.svg';
import facebook from '../../assets/icons/facebook.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import reddit from '../../assets/icons/reddit.svg';
import volume from '../../assets/icons/volume.svg';

function IconLink(props) {
  let iconName;
  switch (props.icon) {
    case 'telegram':
      iconName = telegram
      break;
    case 'discord':
      iconName = discord
      break;
    case 'x':
      iconName = x
      break;
    case 'facebook':
      iconName = facebook
      break;
    case 'linkedin':
      iconName = linkedin
      break;
    case 'reddit':
      iconName = reddit
      break;
    default:
      iconName = telegram
  }

  return (
    <div className="icon-link">
      <img src={iconName} className="icon-link__icon" alt="icon-link"/>
      {props.isVolume && <img src={volume} className="icon-link__icon-volume" alt="icon-volume"/>}
    </div>
  );
}

export default IconLink;
