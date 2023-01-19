import React from 'react';
import Weather from './Weather';
import './App.css';


export default function App() {
  return (
    
    <div className="App">
      <div className="container">
        <Weather defaultCity="London"/>
        
        <footer>
        <div className="LinktoGitHub">
        <a href="https://github.com/YanaSkorikova/react-weather-app" target="_blank" rel="noreferrer"> Open-source code,</a>

                   by Yana Skorikova 👩🏼‍💻
        </div>
        </footer>
    </div>
    </div>
  );
}


