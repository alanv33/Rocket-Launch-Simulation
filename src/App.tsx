import './index.css';
import SimulationScreen from './components/SimulationScreen';
import ControlPanel from './components/ControlPanel';

function App() {
  return (
    <div className="container">
      <h1 className="title">Orbital Simulator</h1>
      <SimulationScreen/>
      <ControlPanel/>
    </div>
  )
}

export default App