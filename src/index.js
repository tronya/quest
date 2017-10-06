import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuestList from "./components/Quest/QuestList";
import {facebook} from "./components/Utils/facebook"
import {appToken} from "./components/Utils/appToken"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appKey: ""
    }
  }

  componentDidMount() {
    facebook.init()
      .then(fbToken => appToken(fbToken))
      .then(r => this.setState({appKey: r}));
  }

  render() {
    let questList;
    if (this.state.appKey) {
      questList = <QuestList appToken={this.state.appKey}></QuestList>
    } else {
      questList = <div>Loading...</div>
    }
    return (
      <div className="container">
        {questList}
      </div>
    )
  }
};

ReactDOM.render(
  <App/>, document.getElementById('root')
);
