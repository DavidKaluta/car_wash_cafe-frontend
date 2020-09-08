import React from 'react';
import logo from './res/carwashcafe_vector.svg';
import fb from './res/facebook-brands.svg'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-menu">
            <div><img src={logo} className="App-logo-wash" alt="סמל" /></div>
        </div>
      </header>
      <header className="App-header-lower">
        <div className="Header-menu-options">
            <div>אודות</div>
            <div>מחירון</div>
            <div>איפה אנחנו?</div>
            <div><a href="https://example.com"><img src={fb} className="App-FB-Icon" alt="Facebook"></img></a></div>
        </div>
      </header>
    </div>
  );
}

export default App;
