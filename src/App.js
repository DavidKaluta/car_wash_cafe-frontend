import React from 'react';
import logo from './carwashcafe_vector.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table className="Header-menu">
          <tr>
            <td className="Logo-cell"><img src={logo} className="App-logo" alt="logo" /></td>
            <td>אודות</td>
            <td>מחירון</td>
            <td>איפה אנחנו?</td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
