import React, {Component} from "react";
import LoadingBLock from "../LoadingBlock/loadingBlock";

class RoutesInfo extends Component {

  legsViews() {
    if (this.props.markers) {

      let legsBlock = this.props.markers.map((leg, i) => {
        const {name,lat,lon,id} = leg;
        return (
          <div key={id} className="routes-leg">
            <p>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              {name}
            </p>
            <p>{lat} {lon}</p>
          </div>
        )
      });
      return legsBlock;
    }
  }

  routesView() {
    const {routeInfo} = this.props;
    if (routeInfo) {
      let {distance, duration, weight, weight_name} = routeInfo;
      distance = distance.toFixed(2);
      duration = Math.floor(duration / 60);
      weight = Math.floor(weight / 60);
      let weight_type;
      let weightTravel = () => {
        switch (weight_name) {
          case "cyclability":
            weight_type = "Cycling";
            return (
              <p>
                <i className="fa fa-bicycle" aria-hidden="true"/>
                {weight_type}: <span>{weight}</span> minutes
              </p>
            );
          default:
            return ""
        }
      };

      return (
        <div className="routes-info-block" >
          <div className="routes-header">
            <p>
              <i className="fa fa-map-o" aria-hidden="true"/>
              Distance: <span>{distance}</span> meters
            </p>
            <p>
              <i className="fa fa-clock-o" aria-hidden="true"/>
              Duration: <span>{duration}</span> minutes
            </p>
            {weightTravel()}
          </div>
          <div className="route-lags-wrapp">
            {this.legsViews()}
          </div>
        </div>
      )
    }
  }

  render() {
    const {routeInfo} = this.props;
    if (routeInfo) {
      return (
        <div className="routes-info">
          {this.routesView()}
        </div>
      )
    } else {
      return <LoadingBLock/>
    }
  }
}

export default RoutesInfo;