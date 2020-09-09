import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class GoogleMap extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={16}
        initialCenter={{ lat: 31.859687, lng: 34.813312 }}
      >
        <Marker position={{ lat: 31.859687, lng: 34.813312 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCaruUrzWxSOHwjIccNck9gytcBmdGRp_c",
})(GoogleMap);
