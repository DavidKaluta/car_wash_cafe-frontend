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
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Footer from './components/Footer.js'

ReactDOM.render(
  <React.StrictMode>
    <div class="wrapper">
    <App />
    <Footer />
    </div>
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
