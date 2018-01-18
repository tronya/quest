import React, {Component} from "react";
import {tokenFromStorage} from "../Utils/appToken";

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      layerShown: false
    };
    this.mapBox = window.mapboxgl;
    this.mapboxToken = "pk.eyJ1IjoidHJvbnlhIiwiYSI6ImNpdXNteHUwdzAwMWkyenBmamRlbTk2Zm8ifQ.aFKT4IOHyPCPRt_GNfUYnw";
  }

  socketConnection(resp) {
    const URL = `ws://188.166.18.216${resp.socket}?token=${tokenFromStorage()}`;
    console.log("url is", URL);
    var socket = new WebSocket(URL);
    window.socket = socket;
    socket.onopen = function () {
      console.log("Соединение установлено.");
    };
    socket.onerror = function (e) {
      console.log(e);
    };

    socket.onmessage = (event) => {
      console.log("Получены данные =>" + event.data);
      this.props.socketSet(JSON.parse(event.data));
    };
  };

  componentWillReceiveProps() {
    if (this.props.sockets) {
      let {points} = this.props.sockets;

      let usersOnMap = points.map((ft) => {
        let {location} = ft;
        return {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [location.lon, location.lat]
          },
          "properties": {
            "title": ft.username
          }
        }
      });
      let newSource = {
        "type": "FeatureCollection",
        "features": usersOnMap
      };
      console.log("layer shown ", this.state.layerShown);
      if (!this.state.layerShown) {
        window.map.addSource('usersOnMap', {
          type: 'geojson',
          data: newSource
        });
        window.map.addLayer({
          id: "UsersPoints",
          type: "circle",
          source: "usersOnMap",
          paint: {
            "circle-color": "#ffed1c",
            "circle-radius": 10,
            "circle-stroke-width": 2,
            "circle-stroke-color": "#000"
          }
        });
        this.setState({layerShown: true});
      } else {
        window.map.getSource('usersOnMap').setData(newSource);
      }
    }
  }

  componentWillMount() {
    let questId = this.props.match.params.id;
    let serverUrl = "http://188.166.18.216/api/v1/";
    let token = tokenFromStorage();
    if (token) {
      fetch(`${serverUrl}quests/${questId}/start_quest/`, {
        method: "POST",
        headers: {
          'Authorization': `Token ${token}`
        }
      })
        .then((R) => R.json())
        .then((url) => {
          this.socketConnection(url)
        });
    }
  }

  componentDidMount() {
    this.mapBox.accessToken = this.mapboxToken;
    window.map = new this.mapBox.Map({
      container: 'gameMap',
      center: [24.02, 49.84],
      style: 'mapbox://styles/tronya/cixa87ptp00g12qo9jjbqm9mk',
      zoom: 15
    });
  }

  userTable() {
    if (this.props.sockets) {
      let {points} = this.props.sockets;
      return points.map((user, i) => {
        return (
          <div key={i} className="game-player-block">
            <div className="username">
              <i className="fa fa-user-circle-o" aria-hidden="true"/>
              <p>{user.username}</p>
            </div>
            <div className="coordinates">
              <i className="fa fa-map-marker" aria-hidden="true"/>
              <div className="info">
                <p>Lat: <span>{user.location.lat}</span></p>
                <p>Lon: <span>{user.location.lon}</span></p>
              </div>
            </div>
          </div>
        )
      });
    }
    return (
      <div className="game-wrapper-loading">
        <h3>Waiting for players</h3>
      </div>
    )
  }

  totalUsersCount() {
    if (this.props.sockets) {
      return (
        <div className="total-users">
          <p>Total users count: <span>{this.props.sockets.points.length}</span></p>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="game-wrapper">
        <div id='gameMap'/>
        <div className="game-players-wrapp">
          {this.totalUsersCount()}
          <div className="game-players">
            {this.userTable()}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;