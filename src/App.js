import logo from './logo.svg';
import './App.css';
import User from './components/User';
import photo from './img/david.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <User name="David" photo={photo} />
      </header>
    </div>
  );
}

export default App;
