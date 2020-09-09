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
import React from "react";
import logo from "./res/carwashcafe_vector.svg";
import fb from "./res/facebook-brands.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { About, Gallery, Map, Home } from './components/Pages'

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div className="Header-menu">
            <div>
              <Link to="/">
                <img src={logo} className="App-logo-wash" alt="סמל" />
              </Link>
            </div>
          </div>
        </header>
        <header className="App-header-lower">
          <div className="Header-menu-options">
            <div>
              <Link to="/about" className="WhiteLinks">אודות</Link>
            </div>
            <div>
              <Link to="/gallery" className="WhiteLinks">גלריה</Link>
            </div>
            <div>
              <Link to="/map" className="WhiteLinks">איפה אנחנו?</Link>
            </div>
            <div>
              <a href="https://www.facebook.com/pages/category/Car-Wash/Car-Wash-Cafe-רחיצת-מכוניות-1653280981570680/">
                <img src={fb} className="App-FB-Icon" alt="Facebook"></img>
              </a>
            </div>
          </div>
        </header>
        <Switch>
          <Route path="/about"><About/></Route>
          <Route path="/gallery"><Gallery/></Route>
          <Route path="/map"><Map/></Route>
          <Route path="/"><Home/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
