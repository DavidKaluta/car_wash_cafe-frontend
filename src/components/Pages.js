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
   
  This code is licensed under the 2-clause BSD License (../../LICENSE)
*/
import React from "react";
import enterance_lambo from "../res/images/f9_new.png";
import free_lunch from "../res/images/f10.jpeg";
import benz_wash from "../res/images/f19.jpeg";
import acc_store from "../res/images/f20.jpeg";
import ImageContainer from "./ImageContainer";
import GoogleMap from "./GoogleMap"
import "./Pages.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="Main-Content">
      <main class="flex-shrink-0">
        <img src={enterance_lambo} className="Home-image" alt="כניסה" />
        <div className="Home-Highlights">
          <div>
            <ImageContainer image={benz_wash} text="רחיצה ללא שריטות" desc="האוטו שלך יצא נוצץ" />
          </div>
          <div>
            <ImageContainer image={free_lunch} text="קפיטריה במקום" desc="כי כולנו קצת רעבים לפעמים" />
          </div>
          <div>
            <ImageContainer image={acc_store} text="אביזרים לרכב" desc="כל מה שהרכב שלך צריך" />
          </div>
        </div>
      </main>
    </div>
  );
}

function About() {
  return (
    <div className="Main-Content">
      <main class="flex-shrink-0">
        <p>Test</p>
      </main>
    </div>
  );
}

function Gallery() {
  return (
    <div className="Main-Content">
      <main class="flex-shrink-0">
        <p>Test</p>
      </main>
    </div>
  );
}

function Map() {
  return (
    <div className="Main-Content">
      <main class="flex-shrink-0">
        <h1 className="Map-Title">איפה אנחנו?</h1>
        <div className="Map-Box">
          <div className="Map-GoogleMap"></div>
          <div className="Map-Addr">
            <h1>כתובת</h1>
            <p>שד׳ המלך חסן השני 3, קריית עקרון</p>
            <p>ליד אוויס</p>
          </div>
        </div>
        <button type="button" className="btn btn-secondary btn-lg btn-block">צור איתנו קשר</button>
      </main>
    </div>
  );
}

export { About, Gallery, Map, Home };
