
import './App.css';
import Clock from './Components/Clock';

function App() {
  return (
    <div className="App">
      <div className='elementContainer'>
        <h1>Digital Clock</h1>
        <div className='timeparent'>
          <div className='timecontainer'>
          <Clock/>
          </div>
          </div>
      </div>
    </div>
  );
}

export default App;
