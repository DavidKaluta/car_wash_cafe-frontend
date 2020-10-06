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

/* stuff from modules */
import React, { useState } from "react";
import { Nav, Navbar, Collapse } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";

/* stuff from components */
import { About, Gallery, Map, Home } from "./components/Pages";

/* assets */
import logo from "./res/carwashcafe_vector.svg";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <Router>
        <header>
          <Navbar className="bs-navbar-cwc">
            <Link to="/">
              <Navbar.Brand>
                <img src={logo} className="App-logo-wash" alt="סמל" />
              </Navbar.Brand>
            </Link>
            <Nav className="ml-auto">
              <div id="desktop-only">
                <Nav.Link as={NavLink} to="/about">
                  אודות
                </Nav.Link>
                <Nav.Link as={NavLink} to="/gallery">
                  גלרייה
                </Nav.Link>
                <Nav.Link as={NavLink} to="/map">
                  מפה
                </Nav.Link>
                <Nav.Link href="https://www.facebook.com/pages/category/Car-Wash/Car-Wash-Cafe-רחיצת-מכוניות-1653280981570680/">
                  פייסבוק
                </Nav.Link>
              </div>
            </Nav>
            <span
              onClick={() => setOpen(!open)}
              aria-controls="hamburger-menu"
              aria-expanded={open}
              class="ml-only"
              id="mobile-only"
            >
              <i className="fas fa-bars"></i>
            </span>
          </Navbar>
          <Collapse in={open} className="burger-wrapper" id="mobile-only">
            <div>
              <Link to="/about">אודות</Link>
              <Link to="/gallery">גלרייה</Link>
              <Link to="/map">מפה</Link>
              <a href="https://www.facebook.com/pages/category/Car-Wash/Car-Wash-Cafe-רחיצת-מכוניות-1653280981570680/">
                פייסבוק
              </a>
            </div>
          </Collapse>
        </header>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
