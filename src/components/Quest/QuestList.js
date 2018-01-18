import React from "react";

import QuestItem from "./QuestItem";
import LoadingView from "../LoadingView/loadingView";

class QuestList extends React.Component {
  componentWillMount() {
    this.props.takeQuests();
  }


  render() {
    const {quests} = this.props;

    if (quests) {
      let questsElement = Object.values(quests).map((quest) => {
        return (
          <QuestItem key={quest.id} quest={quest}/>
        )
      });
      return (
        <div className="row">
          <div className="quests-list">
            {questsElement}
          </div>
        </div>
      )
    } else {
      return <LoadingView/>
    }
  }


}

export default QuestList;