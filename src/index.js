import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import enterance_lambo from './res/images/f9_new.png'
import free_lunch from './res/images/f10.jpeg'
import benz_wash from './res/images/f19.jpeg'
import acc_store from './res/images/f20.jpeg'
import App from './App';
import * as serviceWorker from './serviceWorker';
import Footer from './components/Footer.js'
import ImageContainer from './components/ImageContainer';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <main>
      <img src={enterance_lambo} class="Index-image" alt="כניסה" ></img>
      <div className="Index-Highlights">
          <div><ImageContainer image={benz_wash} text="רחיצה ללא שריטות"></ImageContainer></div>
          <div><ImageContainer image={free_lunch} text="קפיטריה במקום"></ImageContainer></div>
          <div><ImageContainer image={acc_store} text="אביזרים לרכב"></ImageContainer></div>
      </div>
    </main>
    <Footer />
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
