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
import Modal from "react-bootstrap/Modal";
import "./ImageContainer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

class ImageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  render() {
    const handleClose = () =>
      this.setState({
        show: false,
      });
    const handleShow = () =>
      this.setState({
        show: true,
      });
    return (
      <div>
        <Card className="ImageContainer-text">
          <Card.Img variant="top" src={this.props.image} />
          <Card.Title className="ImageContainer-text-title">{this.props.text}</Card.Title>
          <Card.Body>
            <Card.Text>{this.props.desc}</Card.Text>
            <Button variant="primary" onClick={handleShow}>
              עוד מידע
            </Button>
          </Card.Body>
        </Card>
        <Modal
          show={this.state.show}
          onHide={handleClose}
          centered
          className="IC-Modal-Dialogue"
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body className="IC-Modal">{this.props.more}</Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default ImageContainer;
