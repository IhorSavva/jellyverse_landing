import Toolbar from "./components/Toolbar";
import Welcome from "./components/Welcome";
import TickerLine from "./components/TickerLine";
import Graffiti from "./components/Graffiti";
import JellyDecoration from "./components/JellyDecoration";
import BurnEvent from "./components/BurnEvent";

function App() {
  return (
    <div className="">
      <Toolbar/>
      <Welcome/>
      {/*<TickerLine/>*/}
      <Graffiti/>
      <JellyDecoration/>
      <BurnEvent/>
    </div>
  );
}

export default App;
