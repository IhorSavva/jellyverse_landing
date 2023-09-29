import Welcome from "./components/Welcome";
import TickerLine from "./components/TickerLine";
import BurnEvent from "./components/BurnEvent";
import Footer from "./components/Footer";
import Diving from "./components/Diving";
import SecondHeader from "./components/welcome/SecondHeader";
import ThirdHeader from "./components/welcome/ThirdHeader";
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
import JellyfishAnimation from "./components/jellyfish/JellyfishAnimation";

function App() {
  const appRef = useRef(null);
  const welcomeRef = useRef(null);
  const secondHeaderRef = useRef(null);
  const thirdHeaderRef = useRef(null);
  const financeRef = useRef(null);
  const jellyTitle = useRef(null);
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(true);
  const [isThirdHeaderVisible, setIsThirdHeaderVisible] = useState(false);
  const [isFinanceTitleVisible, setIsFinanceTitleVisible] = useState(false);
  const [isJellyTitleVisible, setIsJellyTitleVisible] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === 'welcome' && entry.isIntersecting) {
            setIsWelcomeVisible(true);
            setIsThirdHeaderVisible(false);
            setIsThirdHeaderVisible(false);
          } else if (entry.target.id === 'secondHeader' && entry.isIntersecting) {
            setIsWelcomeVisible(false);
          } else if (entry.target.id === 'thirdHeader' && entry.isIntersecting) {
            setIsThirdHeaderVisible(true);
          } else if (entry.target.id === 'jellyTitle' && entry.isIntersecting) {
            setIsJellyTitleVisible(true);
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

    return () => {
      if (welcomeRef.current) observer.unobserve(welcomeRef.current);
      if (secondHeaderRef.current) observer.unobserve(secondHeaderRef.current);
      if (thirdHeaderRef.current) observer.unobserve(thirdHeaderRef.current);
      if (financeRef.current) observer.unobserve(financeRef.current);
      if (jellyTitle.current) observer.unobserve(jellyTitle.current);
    };
  }, []);

  return (
    <div className="app" ref={appRef}>
      <Diving/>
      <JellyfishAnimation
        isWelcomeVisible={isWelcomeVisible}
        isThirdHeaderVisible={isThirdHeaderVisible}
        isFinanceTitleVisible={isFinanceTitleVisible}
        isJellyTitleVisible={isJellyTitleVisible}
      />
      <div ref={welcomeRef} id="welcome">
        <Welcome/>
      </div>
      <div ref={secondHeaderRef} id="secondHeader">
        <SecondHeader appRef={appRef}/>
      </div>
      <div ref={thirdHeaderRef} id="thirdHeader">
        <ThirdHeader appRef={appRef}/>
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
      <FeaturingList/>
      <GetReady appRef={appRef}/>
      <DefiRevolution appRef={appRef}/>
      <DefiGraffiti/>
      {/*<Jellyfish />*/}
      <BurnEvent/>
      <Footer/>
      <TickerLine/>
    </div>
  );
}

export default App;
