import {Switch, Route} from 'react-router-dom';
import React, {Component} from "react";
import HomeScreen from "../HomeScreen/HomeScreen";
import QuestDetailContainer from "../../containers/QuestDetail";
import GameContainer from "../../containers/Game";
import ParticlesLoader from "../ParticlesLoader/ParticlesLoader";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path='/' component={HomeScreen}/>
          <Route exact path='/quest/:id' component={QuestDetailContainer}/>
          <Route exact path='/game/:id' component={GameContainer}/>
          <Route exact path='/test' component={ParticlesLoader}/>
        </Switch>
      </div>
    )
  }
}

export default Main;