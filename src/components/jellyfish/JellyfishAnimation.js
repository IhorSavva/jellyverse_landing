import React, { useState, useEffect } from "react";
import firstIdleGif from '../../assets/jellyfish_gif/first_idle.gif';
import firstTransitionGif from '../../assets/jellyfish_gif/first_transition_single.gif';
import secondIdleGif from '../../assets/jellyfish_gif/second_idle.gif';
import secondTransitionGif from '../../assets/jellyfish_gif/second_transition_single.gif';
import thirdIdleGif from '../../assets/jellyfish_gif/third_idle.gif';

function JellyAnimation({ isWelcomeVisible, isThirdHeaderVisible }) {
    const [showSecondIdle, setShowSecondIdle] = useState(false);
    const [showThirdIdle, setShowThirdIdle] = useState(false);

    useEffect(() => {
        let timeoutId;
        if (!isWelcomeVisible) {
            timeoutId = setTimeout(() => {
                setShowSecondIdle(true);
            }, 3000);
        } else {
            setShowSecondIdle(false);
        }
        return () => clearTimeout(timeoutId);
    }, [isWelcomeVisible]);

    useEffect(() => {
        let timeoutId;
        if (isThirdHeaderVisible) {
            timeoutId = setTimeout(() => {
                setShowThirdIdle(true);
            }, 2850);
        } else {
            setShowThirdIdle(false);
        }
        return () => clearTimeout(timeoutId);
    }, [isThirdHeaderVisible]);

    return (
        <>
            <img
                src={firstIdleGif}
                className={`welcome__jelly ${isWelcomeVisible ? '' : 'hidden'}`}
                alt="First Idle Animation"
            />
            <img
                src={firstTransitionGif}
                className={`welcome__jelly ${isWelcomeVisible || showSecondIdle ? 'hidden' : 'move-left'}`}
                alt="First Transition Animation"
            />
            <img
                src={secondIdleGif}
                className={`welcome__jelly ${showSecondIdle && !isThirdHeaderVisible ? 'move-left' : 'left hidden'}`}
                alt="Second Idle Animation"
            />
            <img
                src={secondTransitionGif}
                className={`welcome__jelly ${isThirdHeaderVisible && !showThirdIdle ? 'move-right' : 'left hidden'}`}
                alt="Second Transition Animation"
            />
            <img
                src={thirdIdleGif}
                className={`welcome__jelly ${isThirdHeaderVisible && showThirdIdle ? 'move-right' : 'right hidden'}`}
                alt="Second Transition Animation"
            />
        </>
    );
}

export default JellyAnimation;