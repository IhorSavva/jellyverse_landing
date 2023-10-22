import IconLink from "../common/IconLink";
import Toolbar from "../Toolbar";

function HeaderWelcome() {
    return (
        <div className="header__container app__wrapper">
            <Toolbar/>
            <div className="header__content">
                <div className="welcome__links">
                    <IconLink icon="telegram" />
                    <IconLink icon="telegram" isVolume />
                    <IconLink icon="discord" />
                    <IconLink icon="x" />
                    <IconLink icon="facebook" />
                    <IconLink icon="linkedin" />
                    <IconLink icon="reddit" />
                </div>
                <div className="header__title welcome__text-zoom-in">
                    <span>welcome</span>
                    <br/>
                    <span>to defi 3.0</span>
                </div>
            </div>
        </div>
    );
}

export default HeaderWelcome;
