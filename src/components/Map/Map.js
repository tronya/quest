import React, {Component} from "react";
import {showPoints} from "./showPoints";
import {mapSlideShow} from "./mapSlideShow";
import {mapRoute} from "./mapRoute";

class Map extends Component {

  constructor(props) {
    super(props);
    this.mapBox = window.mapboxgl;
    this.markers = this.props.markers;
    this.mapboxToken = "pk.eyJ1IjoidHJvbnlhIiwiYSI6ImNpdXNteHUwdzAwMWkyenBmamRlbTk2Zm8ifQ.aFKT4IOHyPCPRt_GNfUYnw";
  }

  showMap() {
    if (this.markers.length !== 0) {
      this.mapBox.accessToken = this.mapboxToken;
      window.map = new this.mapBox.Map({
        container: 'map',
        center: [this.markers[0].lon, this.markers[0].lat],
        style: 'mapbox://styles/tronya/cixa87ptp00g12qo9jjbqm9mk',
        zoom: 15
      });
      window.map.addControl(new this.mapBox.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      }));
    }
  };

  componentWillUnmount() {
    this.props.removeRoutes();
    window.map.remove();
  }

  componentDidMount() {
    let {markers} = this.props;

    new Promise((good) => {
      this.showMap();
      window.map.on("load", () => {
        showPoints(markers);
        good()
      });
    }).then(mapSlideShow(markers))
      .then((coords, no_coords) => {
          let markerPoints = markers.map((el) => {
            return {
              latitude: +el.lat,
              longitude: +el.lon
            };
          });
          return new Promise((hasRoute) => {
            mapRoute(markerPoints).then(
              (a) => {
                hasRoute(a);
              }
            )
          });
        }
      ).then((routeInfo) => {
      const {distance, duration, weight, weight_name} = routeInfo.routes[0];
      const route = {
        distance,
        duration,
        weight,
        weight_name
      };
      this.props.getRoutes(route);
    });

  }

  render() {
    return (
      <div className="quest-detail-map">
        <div id='map'/>
      </div>
    )
  }
}

export default Map;