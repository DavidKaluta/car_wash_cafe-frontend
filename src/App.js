/*
  Developed by:

________  ________  ___      ___ ___  ________                   
|\   ___ \|\   __  \|\  \    /  /|\  \|\   ___ \                  
\ \  \_|\ \ \  \|\  \ \  \  /  / | \  \ \  \_|\ \                 
 \ \  \ \\ \ \   __  \ \  \/  / / \ \  \ \  \ \\ \                
  \ \  \_\\ \ \  \ \  \ \    / /   \ \  \ \  \_\\ \               
   \ \_______\ \__\ \__\ \__/ /     \ \__\ \_______\              
    \|_______|\|__|\|__|\|__|/       \|__|\|_______|              
                                                                  
                                                                  
                                                                  
 ___  __    ________  ___       ___  ___  _________  ________     
|\  \|\  \ |\   __  \|\  \     |\  \|\  \|\___   ___\\   __  \    
\ \  \/  /|\ \  \|\  \ \  \    \ \  \\\  \|___ \  \_\ \  \|\  \   
 \ \   ___  \ \   __  \ \  \    \ \  \\\  \   \ \  \ \ \   __  \  
  \ \  \\ \  \ \  \ \  \ \  \____\ \  \\\  \   \ \  \ \ \  \ \  \ 
   \ \__\\ \__\ \__\ \__\ \_______\ \_______\   \ \__\ \ \__\ \__\
    \|__| \|__|\|__|\|__|\|_______|\|_______|    \|__|  \|__|\|__|
                                                                  
  (@davidkaluta on twitter)
   
  This code is licensed under the 2-clause BSD License (../LICENSE)
*/
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
            <div><a href="https://www.facebook.com/pages/category/Car-Wash/Car-Wash-Cafe-רחיצת-מכוניות-1653280981570680/"><img src={fb} className="App-FB-Icon" alt="Facebook"></img></a></div>
        </div>
      </header>
    </div>
  );
}

export default App;
