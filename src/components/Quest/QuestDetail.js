import React, {Component} from "react";
import {tokenFromStorage} from "../Utils/appToken";
import Moment from "react-moment";

let serverUrl = "http://188.166.18.216/api/v1/";

class QuestDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      quest: []
    }
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
      let first_marker = markers[0];
      window.mapboxgl.accessToken = 'pk.eyJ1IjoidHJvbnlhIiwiYSI6ImNpdXNteHUwdzAwMWkyenBmamRlbTk2Zm8ifQ.aFKT4IOHyPCPRt_GNfUYnw';
      console.log(first_marker.lon);
      var map = new window.mapboxgl.Map({
        container: 'map',
        center: [first_marker.lon, first_marker.lat],
        style: 'mapbox://styles/tronya/cixa87ptp00g12qo9jjbqm9mk',
        zoom: 15
      });

      var marker = new window.mapboxgl.Marker()
        .setLngLat([first_marker.lon, first_marker.lat])
        .addTo(map);
    }
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
            <h1 className="title">{quest.name}</h1>
            <div className="blured-bg" style={bg_image} key="bg"></div>
            <div className="info">
              {/*<img className="quest_img" src={quest.logo} alt={quest.name}/>*/}

              <p className="description">{quest.description}</p>
              <p className="startDate">
                <Moment fromNow>{quest.start_date}</Moment>
              </p>
            </div>
            <div className="members-list">
              <span>Members:</span>
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