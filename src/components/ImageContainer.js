import React from 'react'
import './ImageContainer.css'

class ImageContainer extends React.Component {
  render() {
    return(
      <div className="ImageContainer">
        <div className="ImageContainer-table">
            <div>
              <img src={this.props.image} className="ImageContainer-image" alt=""></img>
            </div>
            <div>
              <p className="ImageContainer-text">{this.props.text}</p>
            </div>
        </div>
      </div>
    )
  }
}

export default ImageContainer;