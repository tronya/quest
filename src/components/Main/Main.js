import {Switch, Route} from 'react-router-dom';
import React, {Component} from "react";
import HomeScreen from "../HomeScreen/HomeScreen";
import QuestDetail from "../Quest/QuestDetail";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path='/' component={HomeScreen}/>
          <Route exact path='/quest/:id' component={QuestDetail}/>
        </Switch>
      </div>
    )
  }
}

export default Main;