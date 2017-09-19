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
    this.setState({appKey: facebook.init().then((r, e) => appToken(r)).then((appT) => console.log(appT.token))});
  }

  render() {
    return (
      <div>
        <QuestList appToken={this.state.appKey}></QuestList>
      </div>
    )
  }
};

ReactDOM.render(
  <App/>, document.getElementById('root')
);
