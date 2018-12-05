// import React from "react";
// import L from "leaflet";

// const Map = (props) => {
//     const position = [51.505, -0.09]
//     const myMap = L.map('mapid').setView(position, 13)

//     return <div id="mapid"></div>
// }

// export default Map;

import React from "react";
import L from "leaflet";
class Map extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map("map", {
      center: [49.8419, 24.0315],
      zoom: 16,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
    // this.marker = L.marker(this.props.markerPosition).addTo(this.map);
  }
  render() {
    return <div id="map" />;
  }
}
export default Map;
