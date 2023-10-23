import TickerLine from "./components/TickerLine";
import BurnEvent from "./components/BurnEvent";
import Footer from "./components/Footer";
import Diving from "./components/Diving";
import FeaturesTitle from "./components/features/FeaturesTitle";
import ExploreTitle from "./components/features/ExploreTitle";
import FinanceTitle from "./components/features/FinanceTitle";
import JellyTitle from "./components/features/JellyTitle";
import FeaturingList from "./components/features/FeaturingList";
import GetReady from "./components/features/GetReady";
import DefiRevolution from "./components/features/DefiRevolution";
import DefiGraffiti from "./components/DefiGraffiti";
import WelcomeDefiGraffiti from "./components/WelcomeDefiGraffiti";
import React, {useRef, useState, useEffect} from 'react';
import JellyfishBottom from "./components/jellyfish/JellyfishBottom";
import JellyfishVideo from "./components/jellyfish/JellyfishVideo";
import HeaderWelcome from "./components/header/HeaderWelcome";
import HeaderDive from "./components/header/HeaderDive";
import { Scrollbar } from "smooth-scrollbar-react";
import { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";

function App() {
    const scrollbar = useRef(BaseScrollbar);

    const appRef = useRef(null);
    const welcomeRef = useRef(null);
    const secondHeaderRef = useRef(null);
    const thirdHeaderRef = useRef(null);
    const financeRef = useRef(null);
    const jellyTitle = useRef(null);
    const featuringRef = useRef(null);
    const getReadyRef = useRef(null);
    const defiRevolutionRef = useRef(null);
    const defiGraffitiRef = useRef(null);

    const [isWelcomeVisible, setIsWelcomeVisible] = useState(true);
    const [isSecondHeaderVisible, setIsSecondHeaderVisible] = useState(false);
    const [isThirdHeaderVisible, setIsThirdHeaderVisible] = useState(false);
    const [isFinanceTitleVisible, setIsFinanceTitleVisible] = useState(false);
    const [isJellyTitleVisible, setIsJellyTitleVisible] = useState(false);
    const [isGetReady, setIsGetReady] = useState(false);
    const [isFeaturing, setIsFeaturing] = useState(false);
    const [isDefiRevolution, setIsDefiRevolution] = useState(false);
    const [isDefiGraffiti, setIsDefiGraffiti] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target.id === 'headerWelcome' && entry.isIntersecting) {
                        setIsWelcomeVisible(true);
                        setIsSecondHeaderVisible(false);
                    } else if (entry.target.id === 'headerDive' && entry.isIntersecting) {
                        setIsWelcomeVisible(false);
                        setIsSecondHeaderVisible(true);
                        setIsThirdHeaderVisible(false);
                    } else if (entry.target.id === 'thirdHeader' && entry.isIntersecting) {
                        setIsThirdHeaderVisible(true);
                        setIsSecondHeaderVisible(false);
                        setIsJellyTitleVisible(false);
                    } else if (entry.target.id === 'jellyTitle' && entry.isIntersecting) {
                        setIsThirdHeaderVisible(false);
                        setIsJellyTitleVisible(true);
                    } else if (entry.target.id === 'featuring' && entry.isIntersecting) {
                        setIsFeaturing(true);
                        setIsGetReady(false);
                        setIsDefiRevolution(false);
                        setIsDefiGraffiti(false);
                    } else if (entry.target.id === 'get-ready' && entry.isIntersecting) {
                        setIsFeaturing(false);
                        setIsDefiRevolution(false);
                        setIsDefiGraffiti(false);
                        setIsGetReady(true);
                    } else if (entry.target.id === 'defi-revolution' && entry.isIntersecting) {
                        setIsFeaturing(false);
                        setIsGetReady(false);
                        setIsDefiGraffiti(false);
                        setIsDefiRevolution(true);
                    } else if (entry.target.id === 'defi-graffiti' && entry.isIntersecting) {
                        setIsFeaturing(false);
                        setIsGetReady(false);
                        setIsDefiRevolution(false);
                        setIsDefiGraffiti(true);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        if (welcomeRef.current) observer.observe(welcomeRef.current);
        if (secondHeaderRef.current) observer.observe(secondHeaderRef.current);
        if (thirdHeaderRef.current) observer.observe(thirdHeaderRef.current);
        if (financeRef.current) observer.observe(financeRef.current);
        if (jellyTitle.current) observer.observe(jellyTitle.current);
        if (featuringRef.current) observer.observe(featuringRef.current);
        if (getReadyRef.current) observer.observe(getReadyRef.current);
        if (defiRevolutionRef.current) observer.observe(defiRevolutionRef.current);
        if (defiGraffitiRef.current) observer.observe(defiGraffitiRef.current);

        return () => {
            if (welcomeRef.current) observer.unobserve(welcomeRef.current);
            if (secondHeaderRef.current) observer.unobserve(secondHeaderRef.current);
            if (thirdHeaderRef.current) observer.unobserve(thirdHeaderRef.current);
            if (financeRef.current) observer.unobserve(financeRef.current);
            if (jellyTitle.current) observer.unobserve(jellyTitle.current);
            if (featuringRef.current) observer.unobserve(featuringRef.current);
            if (getReadyRef.current) observer.unobserve(getReadyRef.current);
            if (defiRevolutionRef.current) observer.unobserve(defiRevolutionRef.current);
            if (defiGraffitiRef.current) observer.unobserve(defiGraffitiRef.current);
        };
    }, []);

    return (
        <div
            className="app"
            ref={appRef}
            style={{ maxHeight: '100vh', display: "flex" }}
        >
            <Scrollbar
                className="app__scrollbar"
                ref={scrollbar}
                plugins={{
                    overscroll: {
                        effect: "glow",
                    }
                }}
            >
                <Diving/>
                <JellyfishVideo
                    isFirstIdle={isWelcomeVisible}
                    isThirdIdle={isSecondHeaderVisible}
                    isFifthIdle={isThirdHeaderVisible}
                />
                <div
                    ref={welcomeRef}
                    id="headerWelcome"
                >
                    <HeaderWelcome />
                </div>
                <div
                    ref={secondHeaderRef}
                    id="headerDive"
                >
                    <HeaderDive appRef={appRef}/>
                </div>
                <WelcomeDefiGraffiti appRef={appRef}/>
                <FeaturesTitle appRef={appRef}/>
                <ExploreTitle appRef={appRef}/>
                <div ref={financeRef} id="financeTitle">
                    <FinanceTitle appRef={appRef}/>
                </div>
                <div ref={jellyTitle} id="jellyTitle">
                    <JellyTitle appRef={appRef}/>
                </div>
                <div
                    ref={featuringRef}
                    id="featuring"
                    className="featuring-list"
                >
                    <FeaturingList/>
                </div>
                <div ref={getReadyRef} id="get-ready">
                    <GetReady appRef={appRef}/>
                </div>
                <div ref={defiRevolutionRef} id="defi-revolution">
                    <DefiRevolution appRef={appRef}/>
                </div>
                <div ref={defiGraffitiRef} id="defi-graffiti">
                    <DefiGraffiti appRef={appRef}/>
                </div>
                <JellyfishBottom
                    isBottom={true}
                    isFeaturing={isFeaturing}
                    isGetReady={isGetReady}
                    isRevolution={isDefiRevolution}
                    isGraffiti={isDefiGraffiti}
                />
                <BurnEvent/>
                <Footer/>
                <TickerLine/>
            </Scrollbar>
        </div>
    );
}

export default App;
