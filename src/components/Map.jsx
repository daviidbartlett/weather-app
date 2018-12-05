import React from "react";
import L from "leaflet";
class Map extends React.Component {
  state = {};
  componentDidMount() {
    // create map
    this.makeMap(this.props.coords, 1);
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log("updated", prevProps, this.props);
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
  onMapClick = () => {
    this.map.on("click", (e) => {
      const coordinates = e.latlng;
      this.props.addClickableCoords(coordinates);
    });
  };
  render() {
    return <div id="map" onClick={this.onMapClick} />;
  }
}
export default Map;
