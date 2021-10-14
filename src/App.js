import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import OTP from './OTP'
function App() {
  const [isWebAPI, setIsWebAPI]=useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span
          className="App-link"
          onClick={() => setIsWebAPI(false)}
        >
          OTP-autocomplete
        </span>
        <span
          className="App-link"
          onClick={() => setIsWebAPI(true)}
        >
          OTP-Web API
        </span>
      </header>
      <OTP isWebAPI={isWebAPI} />
    </div>
  );
}

export default App;
