import React from 'react';
import logo from './logo.svg';
import './App.css';
import './pages/main-page/main-page'
import MainPage from './pages/main-page/main-page';

function App() {
  return (
    <div className="App">
      back
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    <MainPage/>
    </div>
  );
}

export default App;
