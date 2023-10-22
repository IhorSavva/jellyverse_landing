import React, { useRef, useState, useEffect } from 'react';


function HeaderDive({appRef}) {
    const [hasAnimated, setHasAnimated] = useState(false);
    const headerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const checkVisibility = () => {
        if (!hasAnimated && headerRef.current && appRef.current) {
            const rect = headerRef.current.getBoundingClientRect();
            const appRect = appRef.current.getBoundingClientRect();
            const isElementVisible = (rect.top >= appRect.top) && (rect.bottom <= appRect.bottom);
            if (isElementVisible) {
                setIsVisible(true);
                setHasAnimated(true);
            }
        }
    };

    useEffect(() => {
        if (appRef.current) {
            appRef.current.addEventListener('scroll', checkVisibility);
            return () => {
                appRef.current.removeEventListener('scroll', checkVisibility);
            };
        }
    }, []);

    return (
        <div className="header__container">
            <div
                className="header_titles"
            >
                <div
                    ref={headerRef}
                    className={`header__title ${isVisible ? 'welcome__header-visible' : 'welcome__header-hidden'}`}
                >
                    <span>let's drive</span><br/>
                    <span>into</span><br/>
                    <span>the jellyverse</span>
                </div>
            </div>
        </div>
    );
}

export default HeaderDive;
