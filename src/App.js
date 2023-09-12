import Toolbar from "./components/Toolbar";
import Welcome from "./components/Welcome";
import TickerLine from "./components/TickerLine";
import Graffiti from "./components/Graffiti";
import JellyDecoration from "./components/JellyDecoration";

function App() {
  return (
    <div className="app__wrapper">
      <Toolbar/>
      <Welcome/>
      <TickerLine/>
      <Graffiti/>
      <JellyDecoration/>
    </div>
  );
}

export default App;
