import React, {Component} from "react";
import {tokenFromStorage} from "../Utils/appToken";
import Moment from "react-moment";
import mapBox from "mapbox";

import AssignBlock from "../AssignBlock/AssignBlock";

let serverUrl = "http://188.166.18.216/api/v1/";

class QuestDetail extends Component {


  constructor(props) {
    super(props)
    this.state = {
      quest: []
    }
    this.mapBox = window.mapboxgl;
    this.mapboxToken = "pk.eyJ1IjoidHJvbnlhIiwiYSI6ImNpdXNteHUwdzAwMWkyenBmamRlbTk2Zm8ifQ.aFKT4IOHyPCPRt_GNfUYnw";
    this.currentPoint = 0;
    this.markers = [];
  }

  componentDidMount() {

    let questId = this.props.match.params.id;
    if (questId) {
      let token = tokenFromStorage();
      if (token) {
        fetch(`${serverUrl}quests/${questId}`, {
          method: "GET",
          headers: {
            'Authorization': `Token ${token}`
          }
        })
          .then((R) => R.json())
          .then(resp => {
            this.setState({quest: resp});
            this.showMap(resp.markers);
          });
      }
    }
  }

  showMap(markers) {
    if (markers.length !== 0) {
      this.markers = markers;
      this.mapBox.accessToken = this.mapboxToken;

      window.map = new this.mapBox.Map({
        container: 'map',
        center: [this.markers[0].lon, this.markers[0].lat],
        style: 'mapbox://styles/tronya/cixa87ptp00g12qo9jjbqm9mk',
        zoom: 15
      });
      if (markers.length >= 1) {
        this.mapSlideShow();
      }
    }
  }

  mapSlideShow() {

    window.map.on("load", () => {
      this.showPoint();
      setInterval(() => {
        this.moveCamera();
        if (this.currentPoint < this.markers.length - 1) {
          this.currentPoint++;
        } else {
          this.currentPoint = 0;
        }
      }, 7000);
    });
  }

  // move camera
  moveCamera(mrk) {
    let bearing = Math.floor(Math.random() * 360) + 1
    window.map.flyTo({
      center: [this.markers[this.currentPoint].lon, this.markers[this.currentPoint].lat],
      zoom: 16,
      bearing,
      pitch: 100,
      speed: 0.2,
      curve: 1,
    });
  }

  // show point
  showPoint() {
    let markerPoints = this.markers.map((el) => {
        return {
          latitude: +el.lat,
          longitude: +el.lon
        };
      }),
      markersFeatures = this.markers.map((ft) => {
        return {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [ft.lon, ft.lat]
          },
          "properties": {
            "title": ft.name
          }
        }
      });

    this.mapRoute(markerPoints);

    window.map.addSource('pointsElements', {
      type: 'geojson',
      data: {
        "type": "FeatureCollection",
        "features": markersFeatures
      }
    });
    window.map.addLayer({
      id: "circles",
      type: "circle",
      source: "pointsElements",
      paint: {
        "circle-color": "#ffed1c",
        "circle-radius": 10,
        "circle-stroke-width": 2,
        "circle-stroke-color": "#000"
      }
    });
    window.map.addLayer({
      id: "points",
      type: "symbol",
      source: "pointsElements",
      "layout": {
        "text-field": "{title}",
        "icon-keep-upright": true,
        "text-offset": [0, 0.6],
        "text-anchor": "top"
      }, "paint": {
        "text-color": "#ffed1c",
        "text-halo-color": "rgba(0,0,0,0.7)",
        "text-halo-width": 5,
        "text-halo-blur": 7
      }
    });

  }

  mapRoute(points) {
    let mapboxClient = new mapBox(this.mapboxToken);

    mapboxClient.getDirections(points, {
      profile: 'cycling',
      alternatives: false,
      geometry: 'polyline'
    }, function (err, results) {
      var route = results.routes[0].geometry;
      window.map.addLayer({
        id: 'route',
        type: 'line',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: route
          }
        },
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          'line-width': 7,
          'line-color': '#ffed1c',
          'line-opacity': 0.8
        }
      });
    });
  }

  makeInitials(fn = "", ln = "") {
    let literalName = [];
    if (fn) {
      literalName.push(fn.charAt(0));
    }
    if (ln) {
      literalName.push(ln.charAt(0));
    }
    let literlBlocks = literalName.map((el) => {
      return <span key={el}>{el}</span>
    });
    return (
      <div className="literalName">
        {literlBlocks}
      </div>
    )
  }

  render() {
    if (this.state.quest) {

      let quest = this.state.quest;
      let {members} = quest, membersList;
      if (members) {
        membersList = quest.members.map((member, i) => {
          let {user} = member;
          /* join_date,quest_status,email,fb_id,first_name,last_name */
          return (
            <div className="quest-member" key={i}>
              {this.makeInitials(user.first_name, user.last_name)}
            </div>
          )
        });
      }

      const bg_image = {
        backgroundImage: `url(${quest.logo})`
      };

      return (<div className="quest-detail">
          <div className="quest-information-block">
            <div className="blured-bg" style={bg_image} key="bg"></div>
            <div className="info">
              <h1 className="title">{quest.name}</h1>
              <AssignBlock showButton={true} isAssigned={quest.is_assigned} questId={quest.id}/>
              <p className="description">{quest.description}</p>
              <p className="distance"></p>
              <p className="startDate">
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                <Moment fromNow>{quest.start_date}</Moment>
              </p>
            </div>
            <div className="members-list">
              <span>
                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                Members:
              </span>

              {membersList}
            </div>
          </div>
          <div className="quest-detail-map">
            <div id='map'></div>
          </div>
        </div>
      )
    }
    return (
      <div>Loading Component</div>
    )
  }
}

export default QuestDetail;