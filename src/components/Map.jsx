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
  state = {};
  componentDidMount() {
    // create map
    this.makeMap(this.props.coords, 1);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("updated", prevProps, this.props);
    if (prevProps !== this.props) {
      this.map.remove();
      this.makeMap(this.props.coords, 6);
      this.marker = L.marker(this.props.coords).addTo(this.map);
    }
  }
  makeMap = (coords, zoom) => {
    this.map = L.map("map", {
      center: coords,
      zoom: zoom,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
  };
  render() {
    return <div id="map" />;
  }
}
export default Map;
