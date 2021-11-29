import premlogo from './premlogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Premier League Player Database</h1>
        <img src={premlogo} className="logo" />
        <p>
          Welcome to the Premier League Player Database
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
        <h1>player</h1>
      </header>
    </div>
  );
}

export default App;
