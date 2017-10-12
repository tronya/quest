import React from "react";

import QuestItem from "./QuestItem";
import {tokenFromStorage} from "../Utils/appToken";

let serverUrl = "http://188.166.18.216/api/v1/";

class QuestList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quests: []
    }
  }

  componentDidMount() {
    let token = tokenFromStorage();
    if (token) {
      fetch(`${serverUrl}quests/`, {
        method: "GET",
        headers: {
          'Authorization': `Token ${token}`
        }
      })
        .then((R) => R.json())
        .then(resp => this.setState({quests: resp}));
    }
  }

  render() {
    let quests = this.state.quests.map((quest) => {
      return (
        <QuestItem key={quest.id} quest={quest}></QuestItem>
      )
    });
    return (
      <div className="quests-list">
        {quests}
      </div>
    )
  }


}

export default QuestList;