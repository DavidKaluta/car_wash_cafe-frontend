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
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class CarouselContainer extends React.Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              src={this.props.image1}
              className="d-block w-100"
              alt="Slide 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={this.props.image2}
              className="d-block w-100"
              alt="Slide 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={this.props.image3}
              className="d-block w-100"
              alt="Slide 3"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={this.props.image4}
              className="d-block w-100"
              alt="Slide 4"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={this.props.image5}
              className="d-block w-100"
              alt="Slide5"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={this.props.image6}
              className="d-block w-100"
              alt="Slide 6"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={this.props.image7}
              className="d-block w-100"
              alt="Slide 7"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={this.props.image8}
              className="d-block w-100"
              alt="Slide 8"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={this.props.image9}
              className="d-block w-100"
              alt="Slide 9"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouselContainer;
