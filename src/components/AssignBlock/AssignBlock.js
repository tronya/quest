import React, {Component} from "react";
import {tokenFromStorage} from "../Utils/appToken";

let serverUrl = "http://188.166.18.216/api/v1/";


class AssignBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }

  componentWillReceiveProps(props) {
    this.setState({...props});
  }

  leaveAssignQuesry() {
    console.log("this.state", this.state);
    let token = tokenFromStorage();
    let decision = this.state.isAssigned ? "leave" : "join";
    let method = this.state.isAssigned ? "DELETE" : "POST";
    if (token) {
      fetch(`${serverUrl}quests/${this.state.questId}/${decision}/`, {
        method,
        headers: {
          'Authorization': `Token ${token}`
        }
      })
        .then(resp => {
          console.log("resp", resp);
          if (resp.status === 200) {

          }
        });
    }
  }

  render() {

    const button = () => {
      if (this.state.showButton) {
        let text = this.state.isAssigned ? "Let me quit" : "Assign me!";
        let btnClassName = this.state.isAssigne ? "success btn" : "error btn";
        return (
          <button onClick={this.leaveAssignQuesry.bind(this)} className={btnClassName}>{text}</button>
        )
      }
    };

    if (this.state.isAssigned) {
      return (
        <div className="assignee">
          {button()}
          <div className="is-assigned">You assigned to quest</div>
        </div>
      )
    } else {
      return (
        <div className="assignee">
          {button()}
          <div className="not-assigned">You not assigned to quest</div>
        </div>
      )
    }
  };
}

export default AssignBlock;