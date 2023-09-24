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
import 'aos/dist/aos.css';
import React, {useRef} from 'react';
import Jellyfish from "./components/Jellyfish";

function App() {
  const appRef = useRef(null);

  return (
    <div className="app" ref={appRef}>
      <Diving/>
      <Welcome/>
      <SecondHeader appRef={appRef}/>
      <ThirdHeader appRef={appRef}/>
      <WelcomeDefiGraffiti appRef={appRef}/>
      <FeaturesTitle appRef={appRef}/>
      <ExploreTitle appRef={appRef}/>
      <FinanceTitle appRef={appRef}/>
      <JellyTitle appRef={appRef}/>
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
