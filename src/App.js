import Toolbar from "./components/Toolbar";
import Welcome from "./components/Welcome";
import TickerLine from "./components/TickerLine";
import Graffiti from "./components/Graffiti";
import JellyDecoration from "./components/JellyDecoration";
import BurnEvent from "./components/BurnEvent";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="app">
      <Toolbar/>
      <Welcome/>
      {/*<TickerLine/>*/}
      <Graffiti/>
      <JellyDecoration/>
      <BurnEvent/>
      <Footer/>
    </div>
  );
}

export default App;
