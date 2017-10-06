import React from "react";

import QuestItem from "./QuestItem";

let serverUrl = "http://188.166.18.216/api/v1/";

class QuestList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quests: []
    }
  }

  componentDidMount() {
    let {token} = this.props.appToken;
    console.log("token is", token);
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
      <div className="row">
        {quests}
      </div>
    )
  }


}

export default QuestList;