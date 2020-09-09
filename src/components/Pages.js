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
import tt from "../res/images/f1.jpeg";
import range1 from "../res/images/f2.png";
import benz1 from "../res/images/f3.png";
import x5 from "../res/images/f4.jpeg";
import benz2 from "../res/images/f7.jpeg";
import i8 from "../res/images/f8.png";
import m5 from "../res/images/f24.png";
import rari from "../res/images/f25.png";
import range2 from "../res/images/f29.png";
import washer from "../res/images/f21.png";
import sabih from "../res/images/f12.png";
import ImageContainer from "./ImageContainer";
import CarouselContainer from "./CarouselContainer";
import "./Pages.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
      <main>
        <img src={enterance_lambo} className="Home-image" alt="כניסה" />
        <div className="Home-Highlights">
          <div>
            <ImageContainer
              image={benz_wash}
              text="רחיצה ללא שריטות"
              desc="האוטו שלך ייצא נוצץ"
              more="לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.

              צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס."
            />
          </div>
          <div>
            <ImageContainer
              image={free_lunch}
              text="קפיטריה במקום"
              desc="כי כולנו קצת רעבים לפעמים"
              more="סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.

              ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס."
            />
          </div>
          <div>
            <ImageContainer
              image={acc_store}
              text="אביזרים לרכב"
              desc="כל מה שהרכב שלך צריך"
              more="גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק."
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function About() {
  return (
    <div>
      <main>
        <div class="About-Wrapper">
          <img src={washer} className="About-Promo-Image" alt="שוטף" />
          <h1>גם שטיפה, גם קפה</h1>
          <p>
            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד
            אדנדום סילקוף, מרגשי ומרגשח. עמחליף קולהע צופעט למרקוח איבן איף,
            ברומץ כלרשט מיחוצים. קלאצי קונדימנטום קורוס בליקרה, נונסטי קלובר
            בריקנה סטום, לפריקך תצטריק לרטי. צש בליא, מנסוטו צמלח לביקו ננבי,
            צמוקו בלוקריה שיצמה ברורק. גולר מונפרר סוברט לורם שבצק יהול, לכנוץ
            בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש.
            תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.
          </p>
          <img src={sabih} className="About-Promo-Image" alt="תסביח" />
          <h1>תסביח - אוכלים בפיתה</h1>
          <p>
            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד
            אדנדום סילקוף, מרגשי ומרגשח. עמחליף קולהע צופעט למרקוח איבן איף,
            ברומץ כלרשט מיחוצים. קלאצי קונדימנטום קורוס בליקרה, נונסטי קלובר
            בריקנה סטום, לפריקך תצטריק לרטי. צש בליא, מנסוטו צמלח לביקו ננבי,
            צמוקו בלוקריה שיצמה ברורק. גולר מונפרר סוברט לורם שבצק יהול, לכנוץ
            בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש.
            תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.
          </p>
        </div>
      </main>
    </div>
  );
}

function Gallery() {
  return (
    <div>
      <main className="Gallery-Wrapper">
        <h1>מי ביקר אצלנו?</h1>
        <CarouselContainer
          image1={tt}
          image2={range1}
          image3={benz1}
          image4={x5}
          image5={benz2}
          image6={i8}
          image7={m5}
          image8={rari}
          image9={range2}
          className="Gallery-CC"
        />
      </main>
    </div>
  );
}

function Map() {
  return (
    <div>
      <main>
        <div className="Map-Box">
          <div className="Map-GoogleMap">
            <iframe
              title="מפה"
              width="600"
              height="450"
              frameborder="0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCaruUrzWxSOHwjIccNck9gytcBmdGRp_c&q=31.859687,34.813312"
            />
          </div>
          <div className="Map-Addr">
            <h2>כתובת</h2>
            <p>שד׳ המלך חסן השני 3, קריית עקרון</p>
            <p>ליד אוויס</p>
            <h2>איך מגיעים?</h2>
          </div>
        </div>
      </main>
    </div>
  );
}

export { About, Gallery, Map, Home };
