import React, {Component} from "react";
import Moment from "react-moment";

import AssignBlock from "../AssignBlock/AssignBlock";
import {Link} from "react-router-dom";
import MemberListContainer from "../../containers/MemberList";
import MapContainer from "../../containers/Map";
import RoutesInfoContainer from "../../containers/RoutesInfo";
import LoadingView from "../LoadingView/loadingView";

class QuestDetail extends Component {


  constructor(props) {
    super(props);
    this.mapBox = window.mapboxgl;
    this.mapboxToken = "pk.eyJ1IjoidHJvbnlhIiwiYSI6ImNpdXNteHUwdzAwMWkyenBmamRlbTk2Zm8ifQ.aFKT4IOHyPCPRt_GNfUYnw";
    this.currentPoint = 0;
  }

  componentWillMount() {
    let questId = this.props.match.params.id;
    if (questId) {
      this.props.takeOneQuest(questId);
    }
  }

  componentDidMount() {

  }

  render() {
    if (this.props.questDetail) {
      let quest = this.props.questDetail;

      const bg_image = {
        backgroundImage: `url(${quest.logo})`
      };
      let qdClass = quest.is_assigned ? "collapsed" : "";
      return (
        <div className={`quest-detail ${qdClass}`}>
          <div className="quest-information-block">
            <div className="blured-bg" style={bg_image} key="bg"/>
            <div className="info">
              <h1 className="title">{quest.name}</h1>
              <AssignBlock showButton={true} is_assigned={quest.is_assigned} id={quest.id}
                           questSubscription={this.props.questSubscription}/>
              <p className="description">{quest.description}</p>
              <RoutesInfoContainer/>
              <p className="startDate">
                <i className="fa fa-calendar-check-o" aria-hidden="true"/>
                <Moment fromNow>{quest.start_date}</Moment>
              </p>
              <Link to={`/game/${quest.id}`}>link to game</Link>
            </div>
            <MemberListContainer/>
          </div>
          <MapContainer/>
        </div>
      )
    }
    return (
      <LoadingView/>
    )
  }
}

export default QuestDetail;