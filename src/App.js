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

function App() {
  return (
    <div className="app">
      <Diving/>
      <Welcome/>
      <SecondHeader/>
      <ThirdHeader/>
      <WelcomeDefiGraffiti/>
      <FeaturesTitle/>
      <ExploreTitle/>
      <FinanceTitle/>
      <JellyTitle/>
      <FeaturingList/>
      <GetReady/>
      <DefiRevolution/>
      <DefiGraffiti/>
      <BurnEvent/>
      <Footer/>
      <TickerLine/>
    </div>
  );
}

export default App;
