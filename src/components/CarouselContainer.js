import React from "react";
import {Carousel} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class CarouselContainer extends React.Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img src={this.props.image1} className="d-block w-100" alt="Slide 1"/> 
          </Carousel.Item>
          <Carousel.Item>
            <img src={this.props.image2} className="d-block w-100" alt="Slide 2"/> 
          </Carousel.Item>
          <Carousel.Item>
            <img src={this.props.image3} className="d-block w-100" alt="Slide 3"/> 
          </Carousel.Item>
          <Carousel.Item>
            <img src={this.props.image4} className="d-block w-100" alt="Slide 4"/> 
          </Carousel.Item>
          <Carousel.Item>
            <img src={this.props.image5} className="d-block w-100" alt="Slide5"/> 
          </Carousel.Item>
          <Carousel.Item>
            <img src={this.props.image6} className="d-block w-100" alt="Slide 6"/> 
          </Carousel.Item>
          <Carousel.Item>
            <img src={this.props.image7} className="d-block w-100" alt="Slide 7"/> 
          </Carousel.Item>
          <Carousel.Item>
            <img src={this.props.image8} className="d-block w-100" alt="Slide 8"/> 
          </Carousel.Item>
          <Carousel.Item>
            <img src={this.props.image9} className="d-block w-100" alt="Slide 9"/> 
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouselContainer;
